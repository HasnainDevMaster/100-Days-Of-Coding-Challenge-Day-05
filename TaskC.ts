// 100 Days Of Coding Challenge!

/** Question 15:

Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
You’ll have to think of someone else to invite:

Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
Print a second set of invitation messages, one for each person who is still in your list. */

//---------------------------------------------------------------------------------------------------------------------------------------------

// An array of guests
const guestsList: string[] = ["Salman", "Taha", "Mustafa"];

// Guest unable to attend
const unableToAttend = "Salman";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest
let newGuest = "Bilal";
guestsList[guestsList.indexOf(unableToAttend)] = newGuest;

// Print new invitations to guests for dinner
guestsList.forEach((guest) => {
  console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
