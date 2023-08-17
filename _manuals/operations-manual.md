---
title: Operations Manual
layout: single
classes: wide
permalink: /operations-manual
toc: true    
---

Documentation and procedures for Grandiflora. An experiment in open source organization.

Experimenting with GHP as a publication mechanism.

Welcome to the Grandiflora manual. This is an attempt to record how we run service at Grandiflora! It’s by no means complete, and if you are reading this, please contribute to it!

## Quality of Service

We’re going to start by describing how we want customers to experience our service. As a team, we are collectively responsible for this holistic experience so it’s important that all of us understand the whole thing, especially so that we can escalate and delegate to each other.

### Roles

- Host/SA
  - Welcomes guests - East
  - Seats tables and orients guests - East
  - Answers phone, makes reservations - East
  - Refills water - Southwest
  - Bus and reset tables - Southwest
- Server
  - Capable of performing all Host/SA duties when needed
  - Discloses Specials - Southeast
  - Makes recommendations off glass, cocktail, and dinner menus - Southeast/South
  - Presents wine, food, and cocktails to guests - Southeast/South
  - Handles payments - South
- Wine Server/Somm
  - Capable of performing all Server duties as needed
  - Makes bottle list recommendations - South
  - Presents wine bottles - South
  - Stocks wine fridges and shelves - North
  - Manages wine inventory - North
- Bartender
  - Makes cocktails - South
Preps ice and bar ingredients - Southwest/Northwest
- Supervisor
  - Expo - South
  - Conflict resolution - Northwest
  - Emergency response - North
  - Judgement calls - North
- Manager
  - Hiring and Training - North
- Cook
- Prep
- Cold line
- Hot line
- Dish
- Kitchen Manager
  - Inventory
  - Ordering
  - Pickup

## Operator Instructions

This is our operating manual for specific subsystems that compose Grandiflora. These are general protocols. There will always be exceptions and judgment calls to be made, and there should be a North designee on shift at all times to take responsibility for these. Remember your training: communicate!

This preliminary section will contain general guidelines or explanations of shorthand you will encounter in the sections below.

**Two Sets of Eyes**: This is a practice to explain what you are doing to another (trained or responsible) person either before or immediately after you do it. This prevents mistakes and also notifies staff of exceptional events in case other systems need to adapt. Obviously you don’t want to do this at all times, but when you encounter it in this manual it is an injunction to make sure someone else at least is aware of what you are doing.

### Standards of Conduct

- All Roles
Safety
Fire Safety
Managers to receive alarm training
Knife Safety
Call sharp
Ask what knife dishwashing protocol is
Spill and Slip Prevention - see below
Work Clothes
Nonslip shoes
Hair coverings for kitchen
Physical contamination prevention
Hair
Clothes
Glitter
Pest prevention
No open containers

Hygiene
Handwashing - between tasks
Dishwashing

Communication
Respectful
Calls
Behind
Sharp
Hot
Corner

### Tock Seating

Primary Role: Host
Documentation: [https://tock.zendesk.com/hc/en-us](https://tock.zendesk.com/hc/en-us)

**Pre Arrival**: Before shift, inspect the system’s automatic seating assignments and ask yourself whether they make sense given the party, weather, and context. If rain is anticipated and a party is booked outside, decide with FOH staff on shift whether to add indoor tables to their reservation just in case. The aim is to be prepared either way. If a large party (more than 4) is booked, consider presetting their table, especially if tables will need to be moved to accommodate them. Visualize the entire shift in order of arrivals to make sure there are no conflicts that the automated system did not catch.

**Arrival**: When guests arrive, after they have been greeted, determine whether they have a reservation or not.

**Reservations**: Get the guests name, then mark them as Arrived. Confirm their preferences indicated - number of guests, dietary restrictions, and seating preferences. If the party is incomplete or if there is any hesitation about the number of guests, do not seat until all guests have arrived. Show them the table assigned to them and confirm that it will be acceptable. If so, mark them as Seated; if not, seat their reservation at the appropriate table using drag and drop. Notify the server assigned to that table with the following call: “I seated ((Party Name)) at ((Table Name)), ((Number)) guests.”

**Walk ins**: Ask how many are in the party and confirm that they are there. Consult Timeline and give an estimate. Use preprogrammed pacing unless instructed otherwise by Expo. If possible to seat immediately, do so. Ask for seating preference and offer available tables. If acceptable, seat in tock. Notify the server assigned to the table with the following call: “I seated a walk-in at ((Table Name)) with ((number)) guests.”

**Waitlist**: If it is not possible to seat a walk in immediately, offer a spot on the waitlist. Get name and a phone number, and confirm the estimate from the timeline. Add to waitlist, then drag and drop the waitlist item onto the timeline at the expected time.

**Departures**: When a table gets up to leave, mark them as Finished and either reset the table or notify the server or SA assigned to bus the table.

### Tock Reservations

Primary Role: Host
When taking a reservation in person or over the phone, follow the prompts on Tock. Treat similarly to a walk in. Make sure to get:

Number in party
Full name
Call back number
Dietary restrictions
Special occasion

### Toast Ordering

Primary Role: Server

Punching orders in in Toast is a complex and evolving task. This section will record general guidelines but please consult with Expo or your supervisor on specific dish or beverage protocols. Before reading this section you might wish to read Toast’s documentation: [https://central.toasttab.com/s/article/Starting-Sending-an-Order](https://central.toasttab.com/s/article/Starting-Sending-an-Order)

Verbal or visual confirmation: When entering orders in Toast, make sure to hand deliver or confirm receipt of tickets to Bar and check receipt in Kitchen. This protects us from network failures. Also confirm that the ticket as it printed is the ticket you meant to send.

**Voids and Changes**: When someone makes a mistake or something needs to be canceled or changed, make the change in Toast immediately and notify Bar, Kitchen, or Expo, as appropriate. No customer should see a voided item on the bill. Make sure the void reason is accurate: 86, Server Error, or Customer Changed Mind. Use Two Sets of Eyes for this.

**Industry Discounts**: Two Sets of Eyes. Sunday evenings only. Make sure you use the correct discount code in the system.

### Toast Inventory

North
Primary Role: Wine Server
Quick Edit (during service) Documentation: [https://doc.toasttab.com/doc/platformguide/adminInventoryUpdateQuickEdit.html](https://doc.toasttab.com/doc/platformguide/adminInventoryUpdateQuickEdit.html)
Menu Builder (inventory count) Documentation:
[https://doc.toasttab.com/doc/platformguide/adminInventoryUpdateBackend.html](https://doc.toasttab.com/doc/platformguide/adminInventoryUpdateBackend.html)

Inventory will primarily be used for wine. When we are running low on food specials we can use inventory to track these as well. Read the Toast documentation for specific details on which buttons to press. Quick update will be used to 86 items, whereas inventory counts will use the Menu Builder page on the handheld.

### Toast Menu Programming

South
Primary Role: FOH Supervisor
[https://www.toasttab.com/restaurants/admin/menus](https://www.toasttab.com/restaurants/admin/menus)
[https://grandiflorawine.com/menus](https://grandiflorawine.com/menus)

**General sequence**
Each week, go through the glass menu and dinner menu and check against the menus in Toast. You can use quick edit to modify as necessary, unless it’s a large changeover. Remove items that are no longer available.

**Specials**
Daily specials can be added via quick edit.
Daily Check and 86es
Check with kitchen staff before each service to program anything short on the dinner menu. Get an estimate and use quick edit to adjust inventory. Same applies to 86ed items.
[https://doc.toasttab.com/doc/platformguide/adminInventoryUpdateQuickEdit.html](https://doc.toasttab.com/doc/platformguide/adminInventoryUpdateQuickEdit.html)

### Wine Ordering

When ordering wine, make sure you create a PO in Trello.

### Wine Receiving

When receiving a wine order, check with the Trello PO. Verify that the wine received is the wine ordered. Move the wine cases to the cellar and enter in inventory. Any wines that aren’t in the Knowledge Base, make sure to add to [https://trello.com/c/la829uPG/180-wine-intake](https://trello.com/c/la829uPG/180-wine-intake).

### Stocking Wine

## Trello

Wine Trello
Primary Role: Wine Server

If you’re going to update Wine Trello, check [https://trello.com/c/la829uPG/180-wine-intake](https://trello.com/c/la829uPG/180-wine-intake) for wines that need entries. Make a new card in the Knowledge Base under Wine and add as much information as you can find on the internet to it. Then, copy core technicals to Toast: [https://central.toasttab.com/s/article/How-do-I-add-Item-details-to-my-menu-1493070610233](https://central.toasttab.com/s/article/How-do-I-add-Item-details-to-my-menu-1493070610233)

Food Trello
Primary Role: Kitchen Manager
Training Trello
Primary Role: Supervisor
Bar
Sanitation
Mixing Guidelines
Handmade Ice
Kitchen Inventory
Primary Role: Kitchen Manager
Dish
Primary Role: Cook

Cold Line
Primary Role: Cook

Hot Line
Primary Role: Cook

Prep
Primary Role: Cook

Expo
Primary Role: Supervisor

## Service Standards - Medicine Wheel

### East

Welcoming, orientation, safety
Practice: orientation
Embodiment: poisonous plants and venomous animals
Result: sense of safety, common sense

Warm welcome
Warm tone, body language
Warm language: get comfortable, make yourself at home
Orientation to people
introduce yourself
get names - mark as arrived in Tock
have you been here before?/first time here for everybody? - welcome in, welcome back
check reservations
what brings you in tonight, celebrating anything? - if already noted on the reservation, acknowledge what’s already there!
Orientation to the place
Vegetarian
natural wine bar
And inn
with a permaculture garden
Point out the bathroom!!
Orientation to community
these are mostly sharing plates, local and organic when possible
Create a sense of safety while leading people to their table
watch your step, do you have any dietary restrictions, will this seating work for you?
CHECK IDS
Hazards orientation
we don’t spray in the garden so there are bugs, there’s no fans, we do have umbrellas for shade, here’s some water - stay hydrated!
Answer questions
what’s natural wine?
When did this open?
transition to southeast
Record in Tock

### Southeast

Curiosity, excitement, engagement, forward upward outward motion
Practice: games
Embodiment: bugs, lizards, fast moving things
Result: aliveness: excitement, engagement, animatedness

Here’s what’s new and special!
Affirm East by not recommending anything they’re allergic to
Let them know our wines tend to be not “sweet” (high residual sugar) or “dry” (excessively oaked, extracted, and/or tannic)
Feel out appropriateness
How adventurous are you feeling tonight?
Based on your questions (East) I think you would be interested in these: (make recommendations)
Excitable activating language
did anything jump out at you
Anything you’re curious or excited about

### South

Focus, learning, discernment, follow through
Practice: tracking
Embodiment: mammals
Result: focus and discernment, recall, quick and accurate decision making

Delivering the correct food to the correct table in a reasonable time
WINE DROPS - okay now you’re drinking PAY ATTENTION
Food drops - this is what it is, reaffirm allergies
Checkback to confirm everything is correct, make adjustments, deepen education

### Southwest

Caring, rest, relaxation, stillness, pause, integration
Practice: care and hygiene, also mapping
Embodiment: medicinal plants
Result: calm and integration

Keep water filled
Checkback frequently
Take a pause in your service cycle and reset
Resetting the table, making the space comfortable
HYGIENE
Clean the bathroom

### West

Gathering, connection, sharing stories
Practice: storytelling
Embodiment: sensitive species and ecological indicators i.e. frogs and lichens
Result: sense of responsibility

Balances east. When we’re in East customer is in West
Catch stories, ask questions about them
Ask for feedback and actively listen
Give feedback to staff
Close of day - harvest stories, reflect on performance, make adjustments

### Northwest

Long term reflection, connection to place and tradition, intergenerational connections
Practice: peacemaking
Embodiment: heritage beings and species - redwoods and springs
Result: sense of belonging and meaning

Balances southeast. When customer is in the Northwest we should be in Southeast and vice versa
Empathy - when something goes wrong, acknowledge harms and address them
Active listening - repeat and reiterate to get people on the same page
Collaborative problem solving - ask for solutions before offering them
Making connections across events and incidents
Remembering and recording information about customers for better service

### North

Vision, leadership, struggle and challenge
Practice: survival
Embodiment: trees
Result: groundedness, vision

Balances South. Prevents us from getting lost in the details.
Leadership: making sure staff are growing and developing
Accountability: making sure that decisions support the overall business

### Northeast

Silence, stillness, magic
Practice: silence and invisibility
Embodiment: birds
Result: awareness

Balances southwest. Frees us from comfort seeking, keeps awareness from closing down
Unpredictable - paying attention beyond the situation

## Guidelines for Effective Communication