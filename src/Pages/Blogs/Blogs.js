import React from 'react';
import Title from '../../hooks/Title';

const Blogs = () => {
  Title('Blogs')
  return (
    <div className="my-12 bg-base-200 p-4">
    <h1 className="text-2xl text-center text-black font-semibold bg-sky-200 p-4 mt-6 mb-2">
      Blogs
    </h1>
    <div className="grid grid-cols-1  gap-2 justify-items-center items-center bg-base-200 p-6">
      <div className="card w-full h-full p-6 bg-base-100 shadow-xl image-full">
        <div className="card-body  bg-sky-100">
          <h2 className="card-title text-black mb-3 font-bold">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <div className="text-black">
            <h3 className="text-xl font-semibold  mb-3">
              There are four main types of state you need to properly manage
              in your React apps:
            </h3>
            <li>
              Local (UI) state: Local state is data we manage in one or
              another component.
            </li>
            <li>
              Global (UI) state: Global state is data we manage across
              multiple components.
            </li>
            <li>
              Server state: Data that comes from an external server that must
              be integrated with our UI state.
            </li>
            <li>
              URL state: Data that exists on our URLs, including the pathname
              and query parameters.
            </li>
          </div>
        </div>
      </div>

      <div className="card w-full h-full p-6 bg-base-100 shadow-xl image-full">
        <div className="card-body bg-sky-100 ">
          <h2 className="card-title text-slate-800 mb-3 font-bold">
            How does prototypical inheritance work?
          </h2>
          <div className="text-black">
            <h3 className="text-xl font-semibold mb-3">
              The Prototypal Inheritance is a feature in javascript used to
              add methods and properties in objects. It is a method by which
              an object can inherit the properties and methods of another
              object. Traditionally, in order to get and set the [[Prototype]]
              of an object, we use Object. getPrototypeOf and Object.
            </h3>
          </div>
        </div>
      </div>

      <div className="card w-full h-full p-6 bg-base-100 shadow-xl image-full">
        <div className="card-body bg-sky-100">
          <h2 className="card-title text-slate-800 mb-3 font-bold">
            What is a unit test? Why should we write unit tests?
          </h2>
          <div className="text-black">
            <h3 className="text-xl mb-3">
              The main objective of unit testing is to isolate written code to
              test and determine if it works as intended. Unit testing is an
              important step in the development process, because if done
              correctly, it can help detect early flaws in code which may be
              more difficult to find in later testing stages. <br /> <br />{" "}
              They enable you to catch bugs early in the development process.
              Automated unit tests help a great deal with regression testing.
              They detect code smells in your codebase. For example, if you're
              having a hard time writing unit tests for a piece of code, it
              might be a sign that your function is too complex.
            </h3>
          </div>
        </div>
      </div>

      <div className="card w-full h-full p-6 bg-base-100 shadow-xl image-full">
        <div className="card-body bg-sky-100 ">

          <div className='text-black'>
          <h2 className="card-title mb-3 font-bold">
            React vs. Angular vs. Vue?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 text-start gap-3">
            <div className="w-full">
              <h3 className="text-xl font-bold mb-3 text-orange-400">
                React:
              </h3>
              <p>
                React is based on JavaScript, but it’s mostly combined with
                JSX (JavaScript XML), a syntax extension that allows you to
                create elements that contain HTML and JavaScript at the same
                time.Anything you create with JSX could also be created with
                the React JavaScript API.
              </p>
            </div>
            <div className="w-full">
              <h3 className="text-xl font-bold mb-3 text-orange-400">
                Angular:
              </h3>
              <p>
                Services in Angular are used by Components to delegate
                business-logic tasks such as fetching data or validating
                input. They are a distinct part of Angular applications. While
                Angular doesn’t enforce their use, it’s highly suggested to
                structure apps as a set of distinct services.
              </p>
            </div>
            <div className="w-full">
              <h3 className="text-xl font-bold mb-3 text-orange-400">Vue:</h3>
              <p>
                The Vue.js core library focuses on the View layer only. It’s
                called a progressive framework because you can extend its
                functionality with official and third-party packages, such as
                Vue Router or Vuex, to turn it into an actual
                framework.Although Vue is not strictly associated with the
                MVVM (Model-View-ViewModel) pattern.
              </p>
            </div>
          </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  );
};

export default Blogs;
