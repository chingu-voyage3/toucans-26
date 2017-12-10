## Flow

Home/Landing Page
* What is NGO..? ***MJ: Are you saying we should explain what an NGO is on the landing page?***
* Glimpse of latest Stuff whats going on. ***MJ: Need more clarity on this point***

Login (Top Nav) ***MJ: I think we should use a simple wireframe tool to design the UI. What do you think?***

Register (Top Nav)
* NGO - Form Needs Review before live ***MJ: Yes, to begin with we can have an image upload functionality for the NGO to upload the NGO registration document. There is something called [Niti Aayog](http://niti.gov.in/content/ngo-darpan) in India.***
* User - Alert sent to NGO -> User is interested ***MJ: Yes, we need to think about this. I was thinking that in iteration 1 of the app, to keep things simple we will have a user page only for NGO users and not for contributors (people who want to donate to the NGO). For contributors, we can have a 'contact us' kind of a form for collecting contact details and a message that will be visible to the concerned NGO user when they log in. However, while building the back-end we need to keep the design scalable for the future. So we should manitain User Types for instance.***

Donate (Menu Option)
* General Donation - (Give me call Option) ***MJ: Who are you thinking will give the call? The app company or the NGO?***
* Gift Donation -> on your special Ocassion like birthday
* (Online) Payroll/Monthly Giving-> will be having linked bank Accounts -> Deduct Monthly and Accumulate into portal to donate whenever required. ***MJ: Good idea! Maybe we should consider this for iteration 2. Could be a bit advanced for iteration 1***

Search NGO's (Menu Option)
* List of certified NGO's - By
    * Causes
    * Locale
    * Alphabetically

Events (Menu Option)
* Social Events Like Marathons etc for any Cause ***MJ: Good idea! I was thinking that we can have an Events option, however, the event creation can be a feature in NGO user page. So the NGO can create events with dates that automatically get agregated chronologically and get displayed in the Events menu. In iteration 2 we can think of integrating **Location** of contributor to filter out what events are displayed.***
    * Can participate
    * Can share

Fundraising (Menu Option)
* (Online) Create page to collect funds from friends ***MJ: In iteration 1, maybe we can limit ourselves to a simple 'Share' option integrated with social media***

About Us (Menu Option)
* Mission
* Achievements/ Impacts
* How we work
* Our Team

Contact Us (Menu Option)

Suggestions (Menu Option) ***MJ: Contact Us should be able to take care of this***

Help (Menu Option) ***MJ: Contact Us should be able to take care of this***

Subscribe to Newsletter (Optional) ***MJ: iteration 2 perhaps?***

## Challenges:
* Do we need Online payment Scheme ***MJ: I feel not required for iteration 1***
    * Pros
        * Tax reciept
        * Clear Visiblity and gurantee that money is reaching to source
        * One place to contribute - we can share feedback of reciever
    
    * Cons
        * Need to handle Bank Integrations
        * Need to handle all finance
        * if any error in payment - have to follow up and resolve

* Register
    * If NGO -> **How to verify Authenticity** -> Some Govt Proofs required..? is there any Repository for NGO's like http://www.guidestarindia.org is for India. ***MJ: I mentioned some details above.***
    * If User then is Registration required/optional ***MJ: I think in iteration 1 we need not have user profile/registration for contributor users.***
	
## Iteration 1:
Good set of features above (Thanks Ashish!). I want to propose that for iteration 1, which is the MVP that we need to have ready by Jan 20, 2018, we should narrow the feature list to 'must haves' that will enable us to have a decent front-end and a basic back-end.

* We need to also focus on good UI design and UX and that will require time.
* A simple app that looks good and is easy to use will engage the end user more than a feature heavy app that is difficult to navigate.
* Once iteration 1 is up and running and we are happy, we can plan to take it to the next level in iteration 2. 
