In this project, the `useFormState` hook is used to manage form state in the `SigninForm` and `SignUpForm` components. This hook is essential for handling form submissions and managing form-related state such as error messages .
we can use `useFormStatus` to manage the pending state also of out project

the action is a function that get called on the server when we finish the form and want to submit
we can validate the form and return error if there is no error we do what we need like redirect ,or api call ..ect

the user sign in or sign up process is easy we look the database , if there are no match we creatre an account and send the token which can indentify each user and without fforgetting ouyr secret !

### Flow of `useFormState`

1. **Initialization**:

   - The `SigninForm` component initializes the `useFormState` hook with two arguments: the `signIn` action and an `initialState`.
   - The `initialState` contains a `message` property, which is initially set to an empty string. This property is used to store any error or success messages related to the form submission.

   ```typescript
   const [formState, action] = useFormState<{ message: string | null }>(
     signIn,
     initialState
   )
   ```

2. **Form Submission**:

   - The form element uses the `action` function returned by `useFormState` as its `action` attribute. This function is called when the form is submitted.
   - The `action` function handles the submission logic, invoking the `signIn` function with the form data.

   ```jsx
   <form action={action} className="bg-content1 ...">
     <!-- Form inputs and submit button -->
   </form>
   ```

3. **State Management**:

   - The `formState` object contains the current state of the form, including the `message` property.
   - If the `signIn` function throws an error, the `message` property is updated with an error message, and this message is displayed to the user.

   ```jsx
   {
     formState?.message && (
       <div className="text-red-500 py-1 px-2 rounded-md ">
         {formState.message}!
       </div>
     )
   }
   ```

4. **Rendering Feedback**:
   - The component conditionally renders a message based on the `formState.message` value. This provides immediate feedback to the user after form submission, indicating whether the sign-in was successful or if there was an error.

Overall, the `useFormState` hook simplifies form handling by encapsulating state management and submission logic, making the component more organized and easier to maintain.

---

---

# Route Slots {parallel routes}

its advenced route startegy

its uses @ symbol
its like rendering multiple pages within the same route
each @test have its own error , loading , page files
if that test route {slot }have a nested route and we navigate to it will stay and the changes will be applied

we will recieve the slots on the layout props

we should have on the slot route : default.tsx , loading , error , page ,
default are use as fallback , if we have some routes within the slot it and we do hard reload it wont be able to maintain the state so it will use the fallback
default also need to be in the route who uses the parallel

page , default on the slots should be the same

we can show slot depend on the user role or any similar things
you can return null on the route who uses slots on default.tsx , page.tsx

`there is something cool and so powerful we can do which is that grid layout  SHELL `

# server side feching data

data managment :there are alot of benefits when we use server component to fetch data , one of them is that the server components have direct access to resources and enhance security , and more effciency

- when we use server componets for data managment like fetching (getting), Mutating(updating, creating , deleting ) we need to revalidate the cache

- we get also scoped data fetching , not like normal we would fetch on global and pass as prop

- Streaming and Suspense Integration , incremental delivery

-- async server components , caching
import "server-only";

we can do `per caching request` its for request like if we send the same request , get the same response

---

we have active route and middleware
the middleware allow us to do authentication or setting a header or cokkie before going to the page

if we dont have it and check on the page this will be very bad bcs it will load the page which is bad for us and the performance than it will redirect

we can do route based protection based on the user role

- to do that we need to know where the role is stored like cookie or figure out where to store the admin on the cookie
  redreict , rewrite url ,
  dont forget the matcher

---

# non-form server actions

In Next.js, Server Actions are not limited to form submissions; they can be integrated into various parts of your application, such as event handlers and React hooks. This allows for dynamic server-side operations in response to user interactions or lifecycle events.

we can use server actions on client component

we can do useTransition when switching between tabs or showing some data which are not that important , bcs the heavy state changes or fetching will interupt the ui and not allow it to do anyting

- we can revalidate after some time like every hour using
  time based revalidation :
  fetch("url", {next:{revalidate:3600}})
  or export const revalidate=3600 on page or layout if its not using cookies

on demand revalidation

to opt out from cache we use revalidate =0 or no store
