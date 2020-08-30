import React from 'react'
import styles from "../../css/legal.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getLegal = graphql`
  query termImage {
    termImage: file(relativePath: { eq: "driverimg1.png" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const Term = () => {
      const { termImage } = useStaticQuery(getLegal)

    return (
      <div className="cardlegal">
        <Img
          fluid={termImage.childImageSharp.fluid}
          className={styles.cardMedia}
          alt="term"
        />
        <div className={styles.cardDetails}>
          <h2 className={styles.cardHead}>Terms of Use</h2>
          <h4>Introduction</h4>
          <p>
              By using the Service (as defined below), you agree that you have read, understood, accepted and agreed with the Terms of Use. Furthermore, you agree to the representations made by yourself below. In the event that you do not agree with the Terms of the Service and desire to stop using the Service, please do not continue using the Application (defined below) or the Service. Please read the terms carefully before using the Application or the Service. 
          </p>
          <p>
            The Terms of Use stated herein (“Terms of Use” or “Agreement”) constitute a legal agreement between you and <strong>JRomeDRosa and Co. Inc. (Company Reg. No. CS201909930)</strong>  (the “Company” or “Gofer”). In order to use the Service you must agree to the Terms of Use that are set out below. By using the mobile application supplied to you by the Company (the “Application”), and downloading, installing or using any associated software supplied by the Company (“the Software”) which overall purpose is to enable persons wanting their food delivered to their location online to be matched with third party service providers, affiliates, partners such as delivery driver-partners and restaurant/merchant-partners (collectively, the “Service), you hereby expressly acknowledge and agree to be bound by the Terms of Use, and any future amendments and additions to the Terms of Use as published from time to time at http://www.gofer.ph or through the Application.
            </p>
            <p>
            The Company reserves the right to modify, vary and alter the Terms of Use or its policies relating to the Service at any time as it deems fit. The modifications, variations, and/or alterations shall take effect once the updated version has been posted at http://www.gofer.ph. You agree that it shall be your responsibility to review the Terms of Use regularly which would include the updated version, whether or not reviewed by you, shall constitute your consent and acceptance to such changes.
            </p>
            <p>
            THE COMPANY IS A <strong>TECHNOLOGY COMPANY</strong>  THAT <strong>CONNECTS</strong>  ITS CUSTOMERS WHO WANTS TO HAVE THEIR FOOD DELIVERED TO THEIR DESIRED LOCATION, TO THIRD PARTY SERVICE PROVIDERS SUCH AS DELIVERY DRIVER-PARTNERS AND RESTAURANT/MERCHANT-PARTNERS THROUGH ITS MOBILE APPLICATION AND WEBSITE. THE DELIVERY DRIVER-PARTNER AND RESTAURANT/MERCHANT PARTNER HAS THE OPTION TO OFFER THEIR SERVICES TO YOU AND YOU HAVE THE OPTION TO ACCEPT SUCH SERVICES. THE SERVICE PROVIDED BY THE COMPANY IS TO <strong>CONNECT</strong>  YOU TO THE SAID THIRD PARTY PROVIDER WHO PROVIDES THEIR GOODS OR SERVICES. THE COMPANY IS NOT RESPONSIBLE NOR LIABLE FOR ANY ACTS OR OMISSIONS OF THIRD-PARTY PROVIDERS, DELIVERY DRIVER-PARTNERS, RESTAURANT/MERCHANT-PARTNERS AND ANY GOODS OR SERVICES OFFERED OR PROVIDED TO YOU.
            </p>
            <br></br>
            <h4>Warranties</h4> 
            <p>
            By using the Service, you represent and warrant in express terms that you are legally entitled to agree and accept to the Terms of Use. Moreover, you expressly warrant that you are at least eighteen (18) years old. The Service is not generally available to persons under the age of eighteen (18) or any person prohibited for any valid reason whatsoever to enter into a contractual relationship. By using the Service, you further represent and warrant that you have the right, authority, and capacity to use the Service and to abide by the Terms of Use. Furthermore, you warrant that all the information which you provide shall be true and correct. Your use of the Service is for your own sole, personal use. You undertake not to authorize others to use your identity or user status, and you may not assign or otherwise transfer your user account to any other person or entity. You agree to comply with all applicable laws of the Philippines when using the Service. Each time the Service is used, you reaffirm you acceptance of the then-current Terms of Use.
            </p>
            <p> 
            You can only access the Service through authorized means. Downloading and installing the correct Software for your device becomes your responsibility. The Company is free from any liability by reason of incompatible device or wrong version of the Software to you device.
            The Company reserves the right to prohibit you in using the Service if you use the Application and/or Software with an incompatible or unauthorized device or for purposes different from how the Application and/or Service is intended to be used.
            By using the Software or the Application, you expressly and impliedly agree that:
            </p>
            <ul>
            <li>
            1.	You will only use the Service for lawful purposes;
            </li>
            <li>
            2.	You will only use the Service for the purpose for which it is intended to be used;
            </li>
            <li>
            3.	You will not use the Application for any fraudulent purposes such as fake orders;
            </li>
            <li>
            4.	You will not use the Application and/or the Software to cause nuisance, annoyance, or inconvenience;
            </li>
            <li>
            5.	You will not use the Service, the Application and/or the Software for purposes other than availing the Service;
            </li>
            <li>
            6.	You shall not contact the third party provider, delivery driver-partner or restaurant/merchant partner for purposes other than the Service;
            </li>
            <li>
            7.	You will not impair the proper operation of the network;
            </li>
            <li>
            8.	You shall not intentionally or unintentionally cause or attempt to cause damage to the third party provider, delivery driver-partner or restaurant/merchant-partner;
            </li>
            <li>
            9.	You will not try to harm the Service, the Application and/or the Software in any way whatsoever;
            </li>
            <li>
            10.	You will not copy, duplicate, or distribute the Application and/or Software without the written consent of the Company;
            </li>
            <li>
            11.	You will only use the Application and/or Service for your own personal use and will not monetize or commercialize it in any way to a third party;
            </li>
            <li>
            12.	You will keep and secure the confidentiality of your account information or password we provide you which allows you to access the Service;
            </li>
            <li>
            13.	You will provide the Company with proof of identity as it may reasonably request or require; 
            </li>
            <li>
            14.	You shall register only one (1) account on one device;
            </li>
            <li>
            15.	You agree to provide true, accurate, current and complete information as required for the Service and undertake the responsibility to maintain and update your information in a timely manner to keep it true, accurate, current and complete at all times during the term of this Agreement. You agree that the Company may rely on your information as accurate, current and complete. In the event that the information you have provided is untrue, not current, inaccurate or incomplete, the Company reserves its right to terminate this Agreement and your use of the Service at any time with or without notice.
            </li>
            <li>
            16.	You will only use an access point or data account which you are authorized to use;
            </li>
            <li>
            17.	You shall not employ any means that would cause damage to the Company or enriching yourself through any campaign, offers, or promotion launched by the Company to gain new subscription or usage of the Service by new or existing users; 
            </li>
            <li>
            18.	You are aware that when using the service by SMS, standard telecommunication charges will apply;
            </li>
            <li>
            19.	You shall not, knowingly or unknowingly, impair or circumvent the proper operation of the network which the Service operates on;
            </li>
            <li>
            20.	You acknowledge and agree that the Service is provided on a reasonable effort basis; and
            </li>
            <li>
            21.	You agree that your use of the Service is subject to the Company’s Data Privacy Policy and may be modified, varied, or altered from time to time. 
            </li>
            </ul>
            <p>
            You acknowledge and agree to fully assume responsibility and liability for any and all loss or damage suffered by yourself, the third party service provider, the delivery driver-partner or restaurant/merchant-partner, the Company or any third party as a consequence of any breach of the Terms of Use.
            </p>
            <br></br>
            <h4>Payment</h4>
            <ul>
            <li>
            •	You may choose to pay for the services by cash or by credit card or debit card (“Card”)
            </li>
            <li>
            •	In the event that you choose to pay for the Services by Card, you will need to register a valid Card which belongs to you in accordance with the instructions within the Application.
            </li>
            <li>
            •	If the Card belongs to another person, such as your parents, you hereby warrant and agree that you have obtained their permission to use the Card for the payment of the Services.
            </li>
            <li>
            •	You agree that we may verify and authorize your Card details when you first register the Card with us as well as when you use the Service.
            </li>
            <li>
            •	You agree that we may issue a reasonable authorization hold, which is not an actual charge against your Card, in order to verify your payment method via your Card. The authorized hold amount shall be P1.00. The hold may appear in your statement as “pending”. The authorization hold is issued as a preventive measure against any unauthorized or fraudulent usage of your Card.
            </li>
            <li>
            •	In the event your payment by your Card is processed overseas, you will be liable for any additional charges in relation thereto.
            </li>
            <li>
            •	Once you have completed an order using the Service, you are required to make payment in full to the delivery driver-partner if you have opted to pay by cash or to a third party service provider in the event that you choose to pay by card and your payment will be deducted automatically and is non-refundable. If you have any complaints in relation to the Service provided, then that dispute must be taken up with the delivery driver-partner or the third party provider directly.
            </li>
            <li>
            •	The Company reserves the right to suspend the processing of any transaction or disable or limit the use of the Card in the event of any error in transaction which results in decline or chargeback from the financial institution or where the Company reasonably believes that the Card has been used for a transaction that may be fraudulent, illegal or involves any criminal activity or where the Company reasonably believes you to be in breach of the Terms of Use.
            </li>
            <li>
            •	You agree that you will cooperate in relation to any financial crime screening that is required and to assist the Company in complying with any prevailing laws or regulations in place.
            </li>
            <li>
            •	You shall be responsible to resolve any disputes with your Card company on your own.
            </li>
            </ul>
            <br></br>
            <strong>License Grant & Restrictions</strong>
            <p>
            The Company hereby grants you a license to use the Application and/or Software. This license is limited and revocable at any time and cannot be transferred or assigned without the express written consent of the Company. The license given to you is personal and cannot, in any way, be monetized or commercialized without the express written consent of the Company subject to the Terms of Use herein. All rights not expressly granted to you are reserved by the Company.
            </p>

             <strong>You shall not:</strong>
            <li>
            (i)	license, sublicense, sell, resell, transfer, assign, distribute or otherwise commercially exploit or make available to any third party the Application and/or the Software in any way; 
            </li>
            <li>
            (ii)	modify or make derivative works based on the Application and/or the Software; 
            </li>
            <li>
            (iii)	reverse engineer or access the Software in order to (a) build a competitive product or service, (b) build a product using similar ideas, features, functions or graphics of the Application and/or the Software, or (c) copy any ideas, features, functions or graphics of the Application and/or the Software,
            </li>
            <li>
            (iv)	Launch any program or script which may make multiple server requests per second or burdens or hinders operation and/or performance of the Application and/or the Software;
            </li>
            <li>
            (v)	Use any robot, spider, site search/retrieval application, or other manual or automatic device or process to crawl, obtain, index, “data mine”, or in any way reproduce, duplicate, replicate or circumvent the navigational structure or presentation of the Service or its contents;
            </li>
            <li>
            (vi)	Sell, distribute, disseminate, replicate, reproduce, duplicate in any way shape or form any copyrighted content, material, trademarks, or other proprietary information without first securing the written consent of the owner of such rights.
            </li>
            <li>
            (vii)	Remove, modify, alter, or change any copyright, trademark or other proprietary rights contained in the Service.
            You may use the Application and/or Software only for your personal, non-commercial purposes and shall not use the Application and/or Software to: 
            </li>
            <ul>
              <li>
              (i)	Send spam or otherwise duplicative or unsolicited messages; 
              </li>
              <li>
              (ii)	Send or store infringing, annoying, obscene, threatening, libelous, dangerous, or otherwise unlawful or tortious material, including but not limited to content or materials harmful to children, violates third party privacy rights, discriminates gender, or offends religious belief.
              (iii)	Send harmful computer code or viruses that causes damage to the Company; 
              </li>
              <li>
              (iv)	Interfere with or disrupt the integrity or performance of the Software and/or the Application or the data contained therein; 
              </li>
              <li>
              (v)	Attempt to gain unauthorized access to the Software and/or the Application or its related systems or networks;
              </li>
              <li>
              (vi)	Impersonate any person or entity or otherwise misrepresent your affiliation with a person or entity;
              </li>
              <li>
              (vii)	Not perform any conduct that could possibly cause any harm or damage to the Company’s reputation or engage in any activity that could unreasonably besmirch the reputation of the Company.
              </li>
            </ul>
            <br></br>
             <h4>Intellectual Property Ownership</h4>
            <p>
            The Company shall exclusively own all rights and interests on any copyrighted, trademarked, and patented materials or content in connection with its Mobile Application, Software, and Website/s. The Terms of Use do not convey any rights of ownership to you in relation to its Service, Mobile Application and/or Software, or any intellectual property rights owned by the Company. You are not authorized to exercise any form of ownership such as, but not limited to, selling, distributing, conveying, licensing, whether for personal or commercial use, the Company’s name, Company’s logo, Service, Mobile Application, Software, any names, materials, or content associated with the Mobile Application and/or Software found both in the Company’s Mobile Application and Website without the express written consent of the Company. The exclusive ownership of rights by the Company shall extend to any comments, suggestions or insights which may be given by you in order to enhance the Company’s Services and as well as all components, features, structure, framework, architecture, processes, engineering and artistic design used in the Company’s Mobile Application and/or Website.
            </p>
            <br></br>
             <h4>Confidentiality</h4>
            <p>
            You agree that you shall keep in confidence all relevant information and/or data relating to the Company, its Services, business operations and affairs, marketing campaigns and promotion plans or other related operations which are disclosed to you by or on behalf of the Company, whether in writing or orally, on or after the date of this Terms of Use. You acknowledge, agree, and ensure that you shall use the information and/or data to avail or perform the Service, and shall not without the Company’s prior written consent, disclose any information or data to any third party nor use it for any other purpose.
            </p> 
            <p>
            The scope of the above confidentiality will not apply if the relevant information or data: a.) is required to be disclosed by law b.) the information or data becomes public knowledge through no fault or omission of you; c.) was already in your possession before this Terms of Use has been created; d.) was conveyed to you by an authorized third party;
            </p>

            <h4>Personal Data Protection </h4>
            <p>
            You agree and consent to the Company using and processing your Personal Data for the Purposes and in the manner as identified hereunder.
            You expressly agree and consent to the Company obtaining, processing, using and distributing your Personal Data for the purposes defined hereunder.
            </p>
            <p>
            For the purposes of this Agreement, “Personal Data” means information about you, from which you are identifiable, including but not limited to your name, identification card number, birth certificate number, passport number, nationality, address, telephone number, credit or debit card details, race, gender, date of birth, email address, any information about you which you have provided to the Company in registration forms, application forms or any other similar forms and/or any information about you that has been or may be collected, stored, used and processed by the Company from time to time and includes sensitive personal data such as data relating to health, religious or other similar beliefs. The Company may also collect device data (such as your IMEI number and the names of the apps you have installed on your device) for the purpose of fraud prevention measures.
            </p>
            <p>
            The Company shall use the Personal Data for Legal or Business Purposes as defined in this Terms of Use. In connection thereto, you giving your Personal Data is entirely voluntary. However, if you do not provide the Company your Personal Data, you may not be able to avail yourself or access the Application and/or Software for the Purposes outlined below and may cause the Company to be unable to allow you to use the Service.
            The Company may obtain, process, use, and distribute your Personal Data for business and activities of the Company which shall include, without limitation the following (the “Purpose”):
            </p>
            <ul>
            <li>
            1.	To provide you with any services pursuant to the Terms of Use herein
            </li>
            <li>
            2.	To perform the Company’s obligations involving any contract entered with you
            </li>
            <li>
            3.	To process your participation in any events, promotions, activities, focus groups, research studies, contests, promotions, polls, surveys, or any productions and to communicate with you regarding your attendance thereto
            </li>
            <li>
            4.	Process, manage or verify your application for the Service pursuant to the Terms of Use herein
            </li>
            <li>
            5.	To validate and/or process payments pursuant to the Terms of Use herein
            </li>
            <li>
            6.	To develop, enhance and provide what is required pursuant to the Terms of Use herein to give you a better experience, improve the overall quality of the Service to meet your needs
            </li>
            <li>
            7.	To facilitate or enable any checks as may be required pursuant to the Terms of Use herein
            </li>
            <li>
            8.	To process any refunds, rebates and or charges pursuant to the Terms of Use herein
            </li>
            <li>
            9.	To address and respond to any questions, comments, and feedback from you
            </li>
            <li>
            10.	To communicate with you for any of the purposes listed herein
            </li>
            <li>
            11.	For internal administrative purposes, such as auditing, data analysis, database records
            </li>
            <li>
            12.	For purposes of detection, prevention, and prosecution of crime
            </li>
            <li>
            13.	For legal compliance in accordance to existing laws and regulations
            </li>
            <li>
            14.	To send you personalized alerts, in-app notifications, and emails involving any marketing campaigns, promotions, or events; If you do not wish to receive any email notification or message from the Company you may simply opt out or unsubscribe by scrolling down at the end of the email
            </li>
            <li>
            15.	To share your Personal Data with the Company’s third-party providers, agents, developers, advertisers, partners, event companies or sponsors who may communicate with you for any reasons whatsoever.
            </li>
            </ul>
            <p>
              Gofer needs to share Personal Data with parties whenever necessary to achieve the above defined Purposes. These parties would include:
            </p>
            <ul>
            <li>
            a.	Other Users (As an example, the Personal Data of the customer may be shared with the driver-partner to determine where the delivery driver-partner should drop off the object of the transaction. The same is true with driver-partners, their Personal Data may be shared with Customers to enable the latter to determine who shall deliver their order this may include the driver-partner’s name, vehicle type, model, number plate, location, biography, telephone or mobile number, or average rating;
              </li>
            <li>
            b.	With third parties. (As an example, driver-partner’s Personal Data may be shared with third parties whenever the User shares the details of the online transaction using the share feature of the App. Moreover, non-personally identifiable Personal Data of the User such as hashed email may be given to Google Analytics for the above defined Purposes)
            </li>
            <li>
            c.	With Gofer Partners. (As an example, Gofer may share non-personally identifiable Personal Data of its Users with Gofer’s partner regarding the Users preferences with respect to their food choice)
            </li>
            <li>
            d.	With the owner of Gofer accounts
            </li>
            <li>
            e.	With affiliates
            </li>
            <li>
            f.	With Gofer’s business partners and service providers (This would include but not limited to vendors,  consultants, marketing firms or partners, research firms, data analytics, insurance and financing partners, vehicle solutions partners, payment processors, delivery driver-partner, restaurant/merchant partner, and other service providers or business partners)
            </li>
            <li>
            g.	With Gofer’s legal consultants
            </li>
            <li>
            h.	With governmental authorities whenever applicable.
            </li>
            </ul>
            <p>
            You may opt out in the collection, use, and distribution of your Personal Data. In the event that you wish to opt out or do not give your consent to the above Purposes, please contact the Company at http://www.gofer.ph facilitate the request.
            If there is a change in the Personal Data that you have provided the Company please contact the Company at http://www.gofer.ph. 
            The Company will, to the best of its abilities, effect such changes as requested within thirty (30) working days of receipt of such notice of change.
            </p>
            <p>
            By submitting your information to the Company, you consent to the use of that information as set out in the form of submission and in the Terms of Use.
            </p>
            <br></br>
             <h4>Third Party Interactions</h4>
            <p>
            During use of the Service, you may enter into correspondence with, purchase goods and/or services from, or participate in promotions of third party providers, delivery driver-partner or restaurant/merchant-partner, advertisers or sponsors showing their goods and/or services through the Service, the Software and/or the Application. Any such activity, and any terms, conditions, warranties, or representations associated with such activity, is solely between you and the applicable third-party, delivery driver-partner or restaurant/merchant-partner, advertisers or sponsors. The Company shall have no liability, obligation, or responsibility for any such correspondence, purchase, transaction or promotion between you and any such third-party, delivery driver-partner or restaurant/merchant-partner, advertisers or sponsors. The Group does not endorse any applications or sites on the Internet that are linked through the Service, the Application and/or the Software, and in no event, shall the Company be responsible for any content, products, services or other materials on or available from such sites or third party providers. The Company provides the Service to you pursuant to the Terms of Use. You recognize, however, that certain third party providers, such as restaurant/merchant partners, among others, of goods and/or services may require your agreement to additional or different Terms of Use prior to your use of or access to such goods or services, and the Company is not a party to and disclaims any and all responsibility and/or liability arising from such agreements between you and the third party providers.
            </p>
            <p>
            The Company may rely on third party advertising and marketing supplied through the Service and other mechanisms to earn additional revenue. By agreeing to the Terms of Use you agree to receive such advertising and marketing. If you do not want to receive such advertising, you should notify us in writing or in accordance with the procedure determined by the Company. Generally, the Company reserves its right to not make its Services available to you should you not agree to receive such advertising, but it may choose to make an exception whenever applicable. You agree and allow the Company to compile and release information regarding you and your use of the Service on an anonymous basis as part of a customer profile or similar report or analysis. You agree that it is your responsibility to take all precautions in all actions and interactions with any third party provider, delivery driver-partner, restaurant/merchant-partner, other third party providers, advertisers and/or sponsors you interact with through the Service and/or advertising or marketing material supplied through the Service.
            </p>
            <br></br>
             <h4>Indemnification</h4>
            <p>
            By agreeing to the Terms of Use upon using the Service, you agree that you shall defend, indemnify and hold the Company, its affiliates, officers, directors, members, employees, attorneys and agents harmless from and against any and all claims, costs, damages, losses, liabilities and expenses (including attorneys’ fees and costs and/or regulatory action) arising out of or in connection with: (a) your use of the Service, the Software and/or the Application in your dealings with the third party providers, delivery driver-partner, restaurant/merchant-partner, partners, affiliates advertisers and/or sponsors, or (b) your violation or breach of any of the Terms of Use or any applicable law or regulation, whether or not referenced herein, or (c) your violation of any rights of any third party, including rights of delivery driver-partners or restaurant/merchant-partners before, during, or after the transaction, provided that the violation is in relation to the Service, (d) your use or misuse of the Service, the Software and/or the Application, or (e) your use or misuse of the Application and/or Software including any acts that would cause any inconvenience or annoyance, any fraud that causes damage to the Company, or misrepresentation of any information given to the Company regardless if the Company suffered any damage.
            </p>
            <br></br>
             <h4>Disclaimer of Warranties</h4>
            <p>
            THE COMPANY DOES NOT GUARANTEE, REPRESENT NOR IN ANY WAY WARRANT AS TO THE TIMELINESS, RELIABILITY, QUALITY, AVAILABILITY, ACCURACY, ACCEPTABILITY, OR COMPLETENESS OF THE SERVICE, APPLICATION, OR SOFTWARE. THE COMPANY DOES NOT WARRANT OR REPRESENT THAT THE USE OF THE SERVICE, APPLICATION, AND/OR THE SOFTWARE WILL BE RELIABLE, TIMELY, SAFE, SECURE, OR FREE FROM ERRORS, WOULD MEET YOUR REQUIREMENTS OR EXPECTATIONS, ACCURACY OR RELIABILITY OF THE STORED DATA, QUALITY OF ANY PRODUCTS ASSOCIATED WITH THE SERVICE PURCHASED BY YOU WOULD MEET YOUR REQUIREMENTS OR EXPECTATIONS, DEFECTS, MISTAKES, OR ERRORS IN THE APPLICATION AND/OR SOFTWARE WILL BE RECTIFIED OR CORRECTED, THE APPLICATION AND/OR SOFTWARE IS FREE FROM ANY VIRUS OR HARMFUL COMPONENTS, OR THE SERVERS IN WHICH THE APPLICATION AND/OR SOFTWARE ARE HOSTED ARE FREE FROM VIRUSES OR HARMFUL COMPONENTS, OR THE VEHICLE OR STORAGE BAG USED BY THE THIRD PARTY PROVIDER IS IN EXCELLENT CONDITION, OR THE APPLICATION AND/OR SOFTWARE TRACKS YOU. THE SERVICE AND REWARDS ARE PROVIDED TO YOU STRICTLY ON AN “AS IS” BASIS. TO THE FULLEST EXTENT PERMITTED BY LAW, THE COMPANY EXCLUDES AND DISCLAIMS ALL CONDITIONS, REPRESENTATIONS, AND WARRANTIES, EXPRESS OR IMPLIED, STATUTORY OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY IMPLIED MERCHANTIBILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT OF THIRD PARTY RIGHTS.
            THE COMPANY MAKES NO REPRESENTATION, WARRANTY, OR GUARANTEE AS TO THE RELIABILITY, SAFETY, TIMELINESS, QUALITY, ACCEPTABILITY OR AVAILABILITY OF ANY SERVICES, AND/OR REWARDS, OR OTHER SERVICES AND PRODUCTS OBTAINED BY OR FROM INCLUDING BUT NOT LIMITED TO THE THIRD PARTY PROVIDERS, DELIVERY DRIVER-PARTNERS, RESTAURANT/MERCHANT-PARTNERS THROUGH THE USE OF THE SERVICE, THE APPLICATION AND/OR THE SOFTWARE AND/OR THE REDEMPTION, SUPPLY OR USE OF REWARDS. YOU ACKNOWLEDGE AND AGREE THAT THE ENTIRE RISK ARISING OUT OF YOUR USE OF THE SERVICE, AND ANY THIRD PARTY SERVICES, INCLUDING BUT NOT LIMITED TO THE THIRD PARTY PROVIDER, DELIVERY DRIVER-PARTNERS, RESTAURANT/MERCHANT-PARTNERS, OR OTHER SERVICES AND PRODUCTS REMAIN SOLELY AND ABSOLUTELY WITH YOU AND YOU SHALL HAVE NO RECOURSE WHATSOEVER TO THE COMPANY.
            </p>
            <br></br>
            <h4> Internet Delays</h4>
            <p>
            THE SERVICE, THE APPLICATION AND/OR THE SOFTWARE MAY BE SUBJECT TO DELAYS AND/OR OTHER PROBLEMS INHERENT IN THE USE OF THE INTERNET AND ELECTRONIC COMMUNICATIONS INCLUDING THE DEVICE USED BY YOU OR THE THIRD PARTY PROVIDERS, DELIVERY DRIVER-PARTNERS, RESTAURANT/MERCHANT-PARTNERS BEING FAULTY, NOT CONNECTED, OUT OF RANGE, SWITCHED OFF OR NOT FUNCTIONING. THE COMPANY IS NOT RESPONSIBLE FOR ANY DELAYS, DELIVERY FAILURES, DAMAGES OR LOSSES RESULTING FROM SUCH PROBLEMS.
            </p>
            <br></br>
             <h4>Limitation of Liability</h4>
            <p>
            THE COMPANY DOES NOT WARRANT OR GUARANTEE THE AVAILABILITY, RELIABILITY, TIMELINESS, ACCURACY, SUITABILITY, ACCEPTABILITY OR QUALITY OF THE DELIVERY SERVICES, APPLICATION, GOODS OR SERVICES PROVIDED BY THIRD PARTY PROVIDERS, DELIVERY DRIVER-PARTNERS, RESTAURANT/MERCHANT-PARTNERS.
            THE COMPANY PROVIDES NO WARRANTY, ASSURANCE, OR PROMISE THAT ITS TECHNOLOGY, APPLICATIONS, OR CUSTOMER SERVICE WILL WORK AS INTENDED ON YOUR PHONE, COMPUTER, TABLET OR OTHER DEVICE.
            </p>
            <p>
            THE COMPANY IS NOT LIABLE FOR ANY LOSSES, DAMAGES, CLAIMS OR COSTS INCLUDING ANY CONSEQUENTIAL, INDIRECT, OR INCIDENTAL LOSSES OR DAMAGES TO YOUR MOBILE DEVICE OR ANY APPLICATIONS STORED THEREIN AS A RESULT OF INSTALLATION OR USE OF THE APPLICATION.
            THE COMPANY SHALL NOT BE LIABLE FOR ANY LOSSES OR DAMAGES, INCLUDING BUT NOT LIMITED TO ANY INJURY WHICH YOU MAY SUFFER, ANY DAMAGE OR LOSS TO PROPERTY OWNED BY OR IN YOUR POSSESSION, OR ANY DIRECT OR INDIRECT LOSS AND DAMAGE, RESULTING FROM THE GOODS OR SERVICES PROVIDED BY A DELIVERY DRIVER-PARTNER, RESTAURANT/MERCHANT-PARTNER, OR THIRD PARTY PROVIDER, MATTERS RELATING TO DELIVERY DRIVER-PARTNERS, RESTAURANT/MERCHANT PARTNERS AND/OR THIRD PARTY PROVIDER, OR THE ENTIRE ORDERING PROCESS BY REASON OF YOU USING THE SERVICE IN YOUR CAPACITY AS A CUSTOMER.
            </p>
            <br></br>
           <h4> Notice </h4>
            <p>
            The Company may give notice by means of a general notice on the Application, electronic mail to your email address in the records of the Company, or by written communication sent by registered mail or pre-paid post to your address in the record of the Company. Such notice shall be deemed to have been given upon the expiration of 48 hours after mailing or posting (if sent by registered mail or pre-paid post) or 1 hour after sending (if sent by email). You may give notice to the Company (such notice shall be deemed given when received by the Company) by letter sent by courier or registered mail to the Company using the contact details as provided in the Application.
            </p>
            <br></br>
             <h4>Assignment</h4>
            <p>
            This Agreement as constituted by the Terms of Use as modified from time to time may not be assigned by you without the prior written approval of the Company but may be assigned without your consent by the Company. Any purported assignment by you in violation of this section shall be void.
            </p>
            <br></br>
            <h4> Taxes</h4>
            <p>
            You agree that the Terms of Use shall be subject to all fees, costs, or charges imposed by existing and valid Philippine Taxation laws. You also agree that the Terms of Use shall also be subject to any future taxes that may be enacted, created, or implemented at any point in time.
            </p>
              <br></br>
             <h4>General</h4>
            <p>
            Philippine laws shall govern all disputes, claims, actions, or controversies involving the provisions of the Terms of Use, without regard to the choice or conflicts of law provisions of any jurisdiction. It is understood by the parties that all laws applicable to this agreement is deemed instituted. Any violation shall be brought to the proper courts with jurisdiction in Dagupan City, Pangasinan.
            </p>
            <p>
            The individual terms and conditions of each Restaurant/Merchant-partner shall apply in addition to this Terms of Use.
            No relationship shall arise or exist between you, the Company, third party providers, delivery driver-partners, or restaurant/merchant-partners as a result of the Terms of Use or use of the Service.
            </p>
            <p>
            If any provision of these Terms of Use is found to be invalid by any court having competent jurisdiction, the invalidity of such provision shall have no effect as to the validity of the remaining provisions of these Terms of Use, which shall remain in full force and effect. No waiver of any provision in these Terms of Use shall be deemed a further or continuing waiver of such provision or any other provision.
            In case any provision in this Terms of Use shall be invalid, illegal or unenforceable, by any court having competent jurisdiction the validity, legality and enforceability of the remaining provisions shall not in any way be affected or impaired thereby and such provision shall be ineffective only to the extent of such invalidity, illegality or unenforceability.
            </p>
            <p>
            The failure of the Company to enforce any right or provision in the Terms of Use shall not constitute a waiver of such right or provision unless acknowledged and agreed to by the Company in express writing. The Terms of Use comprises the entire agreement between you and the Company and supersedes all prior or contemporaneous negotiations or discussions, whether written or oral (if any) between the parties regarding the subject matter contained herein.
            </p>
            <p>
            You hereby agree that the Company is entitled to terminate this Agreement and to discontinue giving you Services immediately, with or without notice, in the event that you are found to be in breach of any of the terms stipulated in this Agreement or considers your use of the Service, Application and/or Software unlawful, unacceptable or unreasonable. For the avoidance of ambiguity or doubt, the termination of this Agreement shall not require the Company to compensate, reimburse, or cover any cost incurred by you in the course of you acquiring services from the third party provider, delivery driver-partner, and/or the restaurant/merchant partner under this Agreement.
            For any questions or inquiries involving the Terms of Use, please contact the Company at http://www.gofer.ph.
            </p>
        </div>

      </div>
    )
}

export default Term
