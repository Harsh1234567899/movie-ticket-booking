import { Inngest } from "inngest";
import User from "../models/User.js";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "movie-ticket-booking" ,eventKey: process.env.INNGEST_EVENT_KEY,
  signingKey: process.env.INNGEST_SIGNING_KEY,});

// inngest function to save user data to a database

const syncUserCreation = inngest.createFunction(
    {id: 'sync-user-from-clerk'},
    {event: 'clerk/user.created'},
    // async ({event , step}) => {
    async ({event }) => {
        const {id , first_name , last_name , email_addresses , image_url} = event.data
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            image: image_url
        }
        await User.create(userData)

    //     await step.sendEvent({
    //   name: "app/user.synced",
    //   data: { id, email: userData.email }
    // });
    }
)

// functions to delete user data from database 
const syncUserDeletion = inngest.createFunction(
    {id: 'delete-user-with-clerk'},
    {event: 'clerk/user.deleted'},
    // async ({event , step}) => {
        async ({event }) => {
        const {id} = event.data
        await User.findByIdAndDelete(id)

    //     await step.sendEvent({
    //   name: "app/user.synced",
    //   data: { id, action: "deleted" }
    // });
    }
)

// function to update data in database
const syncUserUpdation = inngest.createFunction(
    {id: 'update-user-from-clerk'},
    {event: 'clerk/user.updated'},
    // async ({event , step}) => {
        async ({event }) => {
        const {id , first_name , last_name , email_addresses , image_url} = event.data
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            image: image_url
        }
        await User.findByIdAndUpdate(id, userData)
    //     await step.sendEvent({
    //   name: "app/user.synced",
    //   data: { id, action: "updated" }
    // });
    }
)

// Create an empty array where we'll export future Inngest functions
export const functions = [syncUserCreation , syncUserDeletion , syncUserUpdation];