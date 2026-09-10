/**
 * A hotel determines room availability using the following rules.
 * First, the system checks whether rooms are still available.
 * If rooms are available:
 * - Premium members receive a free room upgrade.
 * - Regular customers receive the reserved room only.
 * 
 * If no rooms are available:
 * - Premium members are placed on the priority waiting list.
 * - Regular customers are informed that no rooms are available.
 * 
 * Today's reservation:
 * | Information    | Value       |
 * | -------------- | ----------- |
 * | Customer Name  | Nadia Putri |
 * | Premium Member | Yes         |
 * | Room Available | No          |
 * 
 * The system should display the appropriate message.
 * Student Tasks: 
 * 1. Declare all variables.
 * 2. Implement the logic using nested if statements.
 * 3. Display the reservation result.
 */

const customerName = "Nadia Putri";
const isPremiumMember = true;
const isRoomAvailable = false;

if (isRoomAvailable) {
    if (isPremiumMember) {
        console.log(`${customerName} is a premium member and has received a free room upgrade.`);
    } else {
        console.log(`${customerName} has reserved a room.`);
    }
} else {
    if (isPremiumMember) {
        console.log(`${customerName} is a premium member and has been placed on the priority waiting list.`);
    } else {
        console.log(`${customerName} is not a premium member and has been informed that no rooms are available.`);
    }
}