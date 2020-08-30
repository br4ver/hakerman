import React from 'react'
import styles from "../../css/legal.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const getLegal = graphql`
  query privacyImage {
    privacyImage: file(relativePath: { eq: "driverimg1.png" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const PrivacyPolicy = () => {
    const { privacyImage } = useStaticQuery(getLegal)
    return (
      <div className={styles.cardlegal}>
        <Img
          fluid={privacyImage.childImageSharp.fluid}
          className={styles.cardMedia}
          alt="term"
        />
        <div className={styles.cardDetails}>
          <h2 className={styles.cardHead}>GOFER PRIVACY POLICY</h2>
            
             <h4>Introduction</h4>
            <p>
            The objective of this Privacy Policy is to show how JRomeDRosa and Co. Inc. (the “Company” or “Gofer”) collect, use, or disclose Personal Data. Gofer puts primacy in the safety and security of protecting Personal Data of its Users adopting several measures to ensure proper safekeeping of the data acquired. Gofer does not and will not rent or sell Personal Data to anyone. Among other reasons, the use of Personal Data shall generally revolve around legal or business purposes to make it possible for Gofer to provide its Services to its Users, to enhance, strengthen, or improve its Services to its Users, for marketing and promotions, or to comply with all governmental or legal requirements. Gofer will not use the collected Data in bad faith. Lastly, Users are entitled to all rights granted by existing laws. 
            </p>
            <p>
            This Privacy Policy (“Policy”) shows how JRomeDRosa and Co. Inc. (“Company”, “We”, “Us”, or “Gofer”) collect, use, process and disclose your Personal Information and Data through the use of Gofer’s Mobile Application/s and Website/s and all associated mobile applications and websites owned and operated by Gofer (respectively “Apps” and Websites”), products, features, and other services (collectively, “Services”).
            </p>
            
             <h4>Scope</h4>
            <p>
            The scope of this Policy applies to all of the Gofer’s customers, recipients, agents, vendors, suppliers, contractors, partners (delivery drivers and restaurant/merchant partners), and third party service provider (collectively referred to as “Users”)
            </p>

             <h4>Terms</h4>
            <p>
            “Personal Data” is any information which can be used to identify a User. Personal Data includes but is not limited to name, age, birthdate, address, nationality, telephone number, email address, User’s image, marital status, nationality, religion, health information, vehicle details (such as type, model, brand, engine no., specifications, plate no. and the like), insurance information, government-issued identification numbers, bank and credit card details.
            </p>
            <p>
            “Non-Personally Identifiable Data”, is simply data that is anonymous. This data can not be used to distinguish or trace an individual’s identity such as their name, social security number, date and place of birth, or address.
            </p>

             <h4>Collection of Personal Data</h4>
            <p>
            Gofer collects Personal Data from its Users in the manner listed and described below. Whenever applicable, Gofer may consolidate, merge, or combine collected Personal Data with other Personal Data in its possession.
            </p>
            <p>
            The Company collects Personal Data provided by its Users, such as but not limited to name, age, birthdate, address, nationality, telephone number, email address, User’s image, marital status, nationality, religion, health information, vehicle details, government-issued identification numbers, employer, place of birth, vehicle ownership, employment status, notice of tax assessment, and children.
            </p>
            <p>
            Gofer only collects Personal Data when it is voluntarily given by Users. As an example, the User may provide their Personal Data to Gofer when they:
            </p>
            <ul>
            <li>
             a.) create an account in Gofer’s Apps and/or website; 
             </li>
            <li>
              b.) filling up a manual or online form and submitting the same; 
              </li>
            <li>
              c.) information provided to assess qualification or eligibility as a Gofer driver-partner or restaurant/merchant-partner;
              </li>
            <li>
              d.) Personal Data created when the User interacts with Gofer’s Apps, Website, or social media pages; e.) join any event or contest created and organized by Gofer; 
              </li>
            <li>
              f.) demographic information in surveys or third parties.
            </li>
            </ul>
            Personal Data is collected when Users make use of Gofer’s Apps, Website, or Services. This would include but not limited to: 
            <ul>
            <li>
            a.)	Precise or approximate location information as determined through data such as GPS, IP address and WiFi. In the case of Gofer’s driver-Partners, Gofer collects location information when the Gofer Apps is running in the foreground (App is open and on-screen) or background (App open but not on screen) of your device.  In the case of Gofer’s Users who gives their permission for the processing of location data, Gofer collects location information when the Gofer app is running in the foreground or background of their device if this collection is enabled for purposes of detecting pick-up and drop-off location and abnormal route variations.
            </li>
            <li>
            b.)	Feedback, reviews, and ratings
            </li>
            <li>
            c.)	Transaction related information (such as payment method, delivery address, User’s telephone number, distance travelled)
            </li>
            <li>
            d.)	Information generated or created when User’s interact with Gofer’s Apps, Websites, or Services (such as features and content)
            </li>
            <li>
            e.)	Device information (such as hardware model and serial number, screen color resolution, service provider, operating system, IP address, file names and versions, and advertising identifiers); and
            </li>
            <li>
            f.)	Personal data generated or created in messages when the User makes use of Gofer’s in-app chat communication feature.
            </li>
            </ul>
            <p>
            Personal Data is also collected from other sources. Gofer exerts maximum effort that the collection of Personal Data is in accordance with applicable laws. Such resources include but not limited to:
            </p>
            <ul>
            <li>
            a.)	Our partners, such as delivery driver-partners and restaurant/merchant-partners
            </li>
            <li>
            b.)	Publicly available data
            </li>
            <li>
            c.)	Government sources of data
            </li>
            <li>
            d.)	When Users adds another User as an emergency contact
            </li>
            <li>
            e.)	Marketing services providers or partners
            </li>
            <li>
            f.)	Data controller partners
            </li>
            </ul>
            <p>
            Gofer may also collect Personal Data through the integration of third-party tools provided by third party providers in its Apps and Website such as but not limited to third-party order management platform, third-party delivery management platform, Google Analytics, Google Tag Manager, or Facebook Insights.
            </p>
            <p>
            As to Personal Data of driver-partners, Gofer collects Personal Data such as vehicle information data (such as motorcycle brand, model, engine number, plate no. chassis no. and other relevant information), device data (such as accelerometer data, GPS location, IMEI number, and name of apps installed on the device), telematics data (such as idle, acceleration, speed, and braking data), and telephone or mobile number. Sensitive Personal Data such as government issued national identification card, race, marital status, religious and health beliefs. The Sensitive Personal Data are only collected for purposes which are necessary and to comply with legal requirements.
            </p>
            <p>
            As to Personal Data of minors, as a parent or legal guardian, please do not allow minors under your custody or care to submit Personal Data to Gofer. If the Personal Data is disclosed to Gofer, you hereby consent to the processing of the minor’s Personal Data and acknowledge, accept, and agree to be bound by this Privacy Policy and take responsibility and accountability for his or her actions.
            </p>
            <p>
            As to Personal Data of other individuals submitted by a User to Gofer (such as that of their spouse, family members, or friends), the User represents and warrants that the User has obtained their consent for their Personal Data to be collected, processed, used, and disclosed as set out in this Privacy Policy.
            </p>

             <h4>Use of Personal Data</h4>
            <p>
            Gofer, and its third-party service providers, primarily collects and uses Personal data to enhance, personalize, improve, and maintain its products and Services. The Personal Data shall used for the following purposes (“Purposes”):
            </p>
            <ul>
            <li>
            a.	Provide its Users with Services through its Apps, Website, and other relevant Services;
            </li>
            <li>
            b.	Engage its Users to provide Services;
            </li>
            <li>
            c.	Generate, create, maintain, administer, and update the Users account;
            </li>
            <li>
            d.	Identity verification of Users
            </li>
            <li>
            e.	Validate order transaction and to process payments;
            </li>
            <li>
            f.	Track the progress of transaction and detect abnormal trip variations;
            </li>
            <li>
            g.	To implement and enable features that personalize the Users Apps, such as favorite restaurants, food, beverages, or promotional content;
            </li>
            <li>
            h.	To perform internal operations necessary to provide our Services, including troubleshooting software bugs and operational problems, 
            </li>
            <li>performing data analysis, testing and research, monitoring and analyzing usage and activity trends;
            i.	Maintain and protect the security or integrity of the Services and any facilities or equipment used to make the Services available;
            </li>
            <li>
            j.	Reward management and processing
            </li>
            <li>
            k.	Process, manage, or verify the Users application for subscription and to provide the Users with subscriber benefits with Gofer;
            </li>
            <li>
            l.	To enable the management and allocation of fleet resources by our partners;
            </li>
            <li>
            m.	To enable communications of Gofer’s Users
            </li>
            <li>
            n.	To process and screen delivery driver-partners before they can use the Services provided by Gofer;
            o.	To enable communication between the delivery driver-partner, restaurant/merchant partner, and Users strictly to facilitate business 
            </li>
            <li>transactions (such as making use of the in-app feature where the User can call the telephone number associated with the delivery-driver partner)
            p.	To detect and identify unsafe or dangerous driving behavior of its delivery driver-partners and to provide them with personalized feedback;
            </li>
            <li>
            q.	Identity verification
            </li>
            <li>
            r.	Using device, location, profile, usage and other Personal Data to detect, prevent, and combat fraud or unsafe activities;
            </li>
            <li>
            s.	Sharing delivery driver-partners location and details when the Users enables the sharing feature of the App;
            </li>
            <li>
            t.	To track and monitor compliance with Gofer’s terms and conditions, policies, driver-partner Conduct;
            </li>
            <li>
            u.	Detecting, preventing, and prosecuting crimes.
            </li>
            <li>
            v.	To resolve customer support issues (such as concerns or claims involving the relevant order transaction)
            </li>
            <li>
            w.	Improve and monitor Gofer’s customer support responses;
            </li>
            <li>
            x.	To effectively respond to questions, comments, and feedback;
            </li>
            <li>
            y.	Inform Users about the steps taken to resolve customer support issues;
            </li>
            </ul>
            <p>
            Gofer may collect Personal Data of its Users for purposes of analysis, research, testing, or development intended to enhance, strengthen, improve, existing products and/or services or to create new products and/or services. This would make it possible for Gofer to understand and meet the requirements, expectations, preferences, and needs of its Users. Moreover, this would make it possible for Gofer to better protect, improve, and enhance the safety and security of the Users Personal Data and its overall Services. 
            Gofer may collect Personal Data of its Users to investigate and resolve any and all concerns, claims, disputes, or as otherwise allowed or required by applicable law. 
            </p>
            <p>
            The Personal Data may also be used by Gofer whenever required by its legal advisors or any legal, regulatory, governmental or other authority. Gofer may also use the Personal Data to defend itself from any claims, disputes, or causes of action which may be brought by or against it.
            Gofer may use the Personal Data of its Users in matter relating to mergers, acquisitions, sale of company assets, consolidation, restructuring, business asset transactions, or acquisition of all or part of Gofer’s business by another company.
            </p>
            <p>
            Gofer may use the Personal Data of its Users for purposes of marketing and promoting Gofer’s business including its partners, sponsors, or advertisement of products and/or services, campaigns, events, or promotions. This may be in the form of in-app notifications, alerts, newsletters, promotional content materials, event or holiday greetings, or mailings. Gofer may also use the Personal data to notify, invite, or manage your participation in any activity or event it has created. The above may be communicated to its Users through Gofer’s Apps, Websites, social media pages, mobile device through posts, SMS messages, telephone calls, online messaging service, push notifications by hand and by email. Gofer may also use retargeting pixels for purposes of marketing whenever a User visits Gofer’s Apps, Website, or other associated Apps or Websites. The User may, at any time, unsubscribe to any marketing and promotional content by Gofer simply by clicking the unsubscribe link at the bottom of the relevant email or message or to update the Users preferences in the same link. The User may also contact Gofer at http://www.gofer.ph and request that no marketing or promotional content be sent to the said User.
            </p>
             
             <h4>Disclosure of Personal Data</h4>
            <p>
            Gofer needs to share Personal Data with parties whenever necessary to achieve the above defined Purposes. These parties would include:
            </p>
            <ul>
            <li>
            a.	Other Users (As an example, the Personal Data of the customer may be shared with the driver-partner to determine where the delivery driver-partner should drop off the object of the transaction. The same is true with driver-partners, their Personal Data may be shared with Customers to enable the latter to determine who shall deliver their order this may include the driver-partner’s name, vehicle type, model, number plate, location, biography, telephone or mobile number, or average rating;
              </li>
            <li>
            b.	With third-parties. (As an example, driver-partner’s Personal Data may be shared with third parties whenever the User shares the details of the online transaction using the share feature of the App. Moreover, non-personally identifiable Personal Data of the User such as hashed email may be given to Google Analytics for the above defined Purposes);
            </li>
            <li>
            c.	With Gofer Partners. (As an example, Gofer may share non-personally identifiable Personal Data of its Users with Gofer’s partner regarding the Users preferences with respect to their food choice);
            </li>
            <li>
            d.	With the owner of Gofer accounts;
            </li>
            <li>
            e.	With affiliates;
            </li>
            <li>
            f.	With Gofer’s business partners and service providers (This would include but not limited to vendors,  consultants, marketing firms or partners, research firms, data analytics, insurance and financing partners, vehicle solutions partners, payment processors, delivery driver-partner, restaurant/merchant partner, and other service providers or business partners)
            </li>
            <li>
            g.	With Gofer’s legal consultants;
            </li>
            <li>
            h.	With governmental authorities whenever applicable.
            </li>
            </ul>

            <h4>Retention of Personal Data</h4>
            <p>
            The Personal Data collected, used, and disclosed by Gofer shall be retained as long as the User maintains their Gofer account. If there is no longer any reasonable or valid cause to retain or maintain the Personal Data in relation to Gofer’s Services or the defined Purposes or Gofer no longer has any legal or business reason to retain the Personal Data, Gofer adopts measures and steps to prevent access or use of such Personal Data. However, in some cases, Gofer may still retain such Personal Data for compliance with this Privacy Policy, or reasons involving security, safety, fraud detection and prevention, or the protection of Gofer’s rights and/or properties
            </p>
            <p>
            Users can request to delete their account or Personal Data or a specific portion of their Personal Data by contacting Gofer at http://www.gofer.ph. In some cases, Gofer may retain some information whenever required by law or for reasons involving security, safety, protection of rights, fraud detection and prevention after the User has requested for its deletion. In connection thereto, Gofer deletes the Personal Data that it is not required to retain and adopts measures to restrict any form of access to or use of any Personal Data it is required to retain.
            </p>

            
             <h4>Cookies</h4>
            <p>
            As is common practice with almost all professional Apps and Websites Gofer uses cookies, which are tiny files that are downloaded to the Users computer, to improve your experience. This Privacy Policy describes what information Gofer gathers, how it uses it and why sometimes there is a need to store these cookies. Gofer will also share how the User can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the Apps and Website functionality. In addition, Gofer uses cookies and other identification technologies on its Apps, Websites, emails, and online marketing for purposes described in this Privacy Policy. Gofer, and third parties associated with Gofer, may use cookies, tags, web beacons, scripts, local shared objects such as flash and HTML 5, advertising identifiers (including mobile identifiers such as Google’s Advertising ID and Apple’s IDFA) and similar technology (“Cookies”) in connection with the use of Gofer’s Apps and Website.
            Gofer uses cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that the User leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
            </p>
            <p>
            The User can prevent the setting of cookies by adjusting the settings on their browser Be aware that disabling cookies will affect the functionality of this and many other Apps and Websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of Gofer’s Apps and Website. Therefore, it is recommended that the User do not disable cookies.
            Without limiting other reasons, Gofer uses cookies for the following purpose: 
            </p>
            <ul>
            <li>
            •	Account related cookies
            <p>If you create an account with us then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out however in some cases they may remain afterwards to remember your site preferences when logged out. Moreover, we use cookies for purposes of account authentication.</p>
            </li>
            <li>
            •	Login related cookies
             <p>We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.</p>
            </li>
            <li>
            •	Email newsletters related cookies
            <p>This site offers newsletter or email subscription services and cookies may be used to remember if you are already registered and whether to show certain notifications which might only be valid to subscribed/unsubscribed users.</p>
            </li>
            <li>
            •	Advertising and Marketing
            <p>We use cookies to deliver and measure the effectiveness of advertising campaigns, promotions, or offers to enhance and strengthen the Users experience with the Service</p>
            </li>
            <li>
            •	Orders processing related cookies
            <p>Gofer offers its Services to its Users through its Apps and Website which may include payment facilities and some cookies are essential to ensure that your order is remembered between pages so that we can process it properly.</p>
            </li>
            <li>
            •	Surveys related cookies
            <p>From time to time Gofer offer User surveys and questionnaires to provide the User with interesting insights, helpful tools, or to understand our user base more accurately. These surveys may use cookies to remember who has already taken part in a survey or to provide you with accurate results after the User change pages.</p>
            </li>
            <li>
            •	Forms related cookies
            
            <p>When the User submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember the Users user details for future correspondence.</p>
            </li>
            <li>
            •	Site preferences cookies
               
            <p>
            In order to provide the User with a great experience with Gofer’s Apps and Website it provides the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences Gofer needs to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.
            </p>
            </li>
            </ul>
            <p>
            In some special cases Gofer also use cookies provided by trusted third parties. The following section details which third party cookies the User might encounter through this site.
            </p>
            <p>
            Gofer uses Google Analytics on its Apps and Website which is one of the most widespread and trusted analytics solution on the web for helping Gofer to understand how the User makes use of the Apps and/or Website and in ways that we can improve your experience. These cookies may track things such as how long the User spend on the site and the pages that the User visit so we can continue to produce engaging content.
            Third party analytics are used to track and measure usage of Gofer’s Apps and Website so that Gofer  can continue to produce engaging content. These cookies may track things such as how long the User spend on the site or pages the User has visited which helps Gofer to understand how it can improve the site for its Users.
            </p>
            <p>
            From time to time Gofer test new features and make subtle changes to the way that the site is delivered. When Gofer is still testing new features these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimizations our users appreciate the most.
            </p>
            <p>
            As Gofer provides its Services it's important for it to understand statistics about how many of the visitors to our site actually make a purchase and as such this is the kind of data that these cookies will track. This is important to you as it means that we can accurately make business predictions that allow us to monitor our advertising and product costs to ensure the best possible price.
            </p>
            <p>
            The Google AdSense service Gofer use to serve advertising uses a DoubleClick cookie to serve more relevant ads across the web and limit the number of times that a given ad is shown to the User.
            </p>
            <p>
            We use adverts to offset the costs of running this site and provide funding for further development. The behavioral advertising cookies used by Gofer’s Apps and Website are designed to ensure that we provide you with the most relevant adverts where possible by anonymously tracking your interests and presenting similar things that may be of interest.
            </p>
            <p>
            Several partners advertise on our behalf and affiliate tracking cookies simply allow us to see if our customers have come to the site through one of our partner sites so that we can credit them appropriately and where applicable allow our affiliate partners to provide any bonus that they may provide you for making a purchase.
            </p>
            <p>
            Gofer also uses social media buttons and/or plugins on this site that allow you to connect with your social network in various ways. For these to work the following social media sites including but not limited to Facebook, Instagram, or Twitter, will set cookies through our site which may be used to enhance the Users profile on their site or contribute to the data they hold for various purposes outlined in their respective privacy policies.
            </p>
            <p>
            Users may contact Gofer for further inquiries, questions, or requests regarding cookies at http://www.gofer.ph.
            </p>

             <h4>Amendments and updates</h4>
             <p>Gofer reserves its right to modify, vary, change, alter, remove, supplement or amend the terms of this Privacy Policy at any time, with or without notice, by placing the updated version of the Privacy Policy on its Websites. By using Gofer’s Apps, Websites, or Services, purchase goods or services from Gofer or engaging, maintaining, and continuing communications with Gofer following any modification, variation, change, alteration, removal, or supplement, or amendment to this Privacy Policy shall signify that the User has acknowledged and has accepted the new and updated Privacy Policy.</p>
            
            <p>Any questions or queries about Personal Data? Please contact us at <a href="http://www.gofer.ph">www.gofer.ph</a></p>
            <br></br>
        </div>
      </div>
    )
}

export default PrivacyPolicy
