import './App.css';
import React from 'react';
import db from './firebaseInit.js'

import Header from './components/Header'
import Modal from './components/Modal'

import MyContext from './context/context'
import Categories from './components/Categories';
import Elements from './components/Elements';
import firebase from 'firebase';
import Spinner from './components/Spinner';

import {
  BrowserRouter as Router
  // ,
  // Switch,
  // Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";

function App() {

  React.useEffect(()=>{
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        setUserData(user)
        db.collection(user.uid).get().then((querySnapshot) => {
          const todos = querySnapshot.docs.map((item)=>{
            return (
              {
                id: item.id,
                ...item.data()
              }
            )
          })
          setTodoElements(todos)
      });
      } else {
        // No user is signed in.
        setShowModal(true)
      }
    });
  }, [])

  let [showModal, setShowModal] = React.useState(false);
  let [email, setEmail] = React.useState('');
  let [password, setPassword] = React.useState('');
  let [modeSignUp, setModeSignUp] = React.useState(false);
  let [userData, setUserData] = React.useState({});
  let [todoElements, setTodoElements] = React.useState([]);
  let [activeCategory, setActiveCategory] = React.useState('');
  let [disableMode, setDisableMode] = React.useState(false);
  let [modeEdit, setModeEdit] = React.useState(false);
  let [activeEditElement, setActiveEditElement] = React.useState({});
  let [editInputValue, setEditInputValue] = React.useState('');



  const createUser = (e)=>{
      e.preventDefault();
      console.log('create')
      firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((user) => {
              // Signed in 
              // ...
              console.log(user)
          })
          .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(errorCode, errorMessage)
              // ..
          });
          setEmail('')
          setPassword('')
  }
  const signIn = (e)=> {
    e.preventDefault();
    console.log('singin')
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      // Signed in 
      // ...
      console.log(user)
      setShowModal(false)
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });
    setEmail('')
    setPassword('')
  }
  const signOut = ()=>{
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      setUserData({})
    }).catch(function(error) {
      // An error happened.
    });
  }
  const addElement = (inputValue, activeCategory)=>{
    setDisableMode(true)
      db.collection(userData.uid).add({
      value: inputValue,
      category: activeCategory,
      done: false
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        updateElements();
        setDisableMode(false);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);

    });
  }
  const editElement = (elemetId)=>{
    setDisableMode(true)
    let prev;

    db.collection(userData.uid).doc(elemetId).get().then((item)=>{
      return prev = item.data()
    }).then(()=>{
      db.collection(userData.uid).doc(elemetId).set({
        done: !prev.done
      }, {merge: true})
      .then(function() {
          console.log("Document successfully written!");
      }).then(()=>{
        updateElements();
        setDisableMode(false);
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
    })
  }
  const editElementValue = (elemetId)=>{
    setDisableMode(true)

    db.collection(userData.uid).doc(elemetId).get().then((item)=>{
      // return prev = item.data()
    }).then(()=>{
      db.collection(userData.uid).doc(elemetId).set({
        value: activeEditElement.value,
        category: activeEditElement.category,
        done: activeEditElement.done
      }, {merge: true})
      .then(function() {
          console.log("Document successfully written!");
      }).then(()=>{
        updateElements();
        setDisableMode(false);
        setModeEdit(false)
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
    })
  }
  const updateElements = ()=> {
    db.collection(userData.uid).get().then((querySnapshot) => {
      const todos = querySnapshot.docs.map((item)=>{
        return (
          {
            id: item.id,
            ...item.data()
          }
        )
      })
      setTodoElements(todos)
  });
  }
  const deleteElement = (elementId)=>{
    setDisableMode(true)
    db.collection(userData.uid).doc(elementId).delete().then(function() {
      console.log("Document successfully deleted!");
  }).then(()=>{
    updateElements();
    setDisableMode(false)
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
  }

  return (
    <Router>



    <div className="App">
    {disableMode ? <Spinner></Spinner> : null}
      <MyContext.Provider value={
        {
          showModal: showModal,
          setShowModal: setShowModal,
          email: email,
          setEmail: setEmail,
          password: password,
          setPassword: setPassword,
          modeSignUp: modeSignUp,
          setModeSignUp: setModeSignUp,
          createUser: createUser,
          signIn: signIn,
          addElement: addElement,
          activeCategory: activeCategory,
          setActiveCategory: setActiveCategory,
          updateElements: updateElements,
          todoElements: todoElements,
          editElement: editElement,
          deleteElement: deleteElement,
          modeEdit: modeEdit,
          setModeEdit: setModeEdit,
          activeEditElement: activeEditElement,
          setActiveEditElement: setActiveEditElement,
          editInputValue: editInputValue,
          setEditInputValue: setEditInputValue,
          editElementValue: editElementValue,
          signOut: signOut,
          userData: userData
        }
      }>
        
        <Header></Header>
        

        <div className="container">
        {userData.uid ? 
          <div className="row">
            <div className="col-xl-4 col-md-4 col-xs-4">
              <Categories></Categories>
            </div>
            <div className="col-xl-8 col-md-8 col-xs-8">
              <Elements></Elements>
            </div>
          </div>
          :
            <h2 className="text-center">Please log in or create an account</h2>

        }

        </div>


        {showModal ? <Modal></Modal> : null}

      </MyContext.Provider>

      

    </div>
    </Router>

  );
}

export default App;
