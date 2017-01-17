import React from 'react'
import { Link } from 'react-router'
import Footer from './footer'

export default React.createClass({
  render() {
    return (
      <section className="sectionAll">
        <h1>Resume</h1>
        <div>
          <p className="resumeHeaderText">David Rangel</p>
          <p className="resumeHeaderText">6719 Blue Oak Ln</p>
          <p className="resumeHeaderText">San Antonio, TX 78227</p>
          <p className="resumeHeaderText">(210) 836-4821</p>
          <p className="resumeHeaderText"><a href= "mailto:mr.davidrangel@gmail.com">mr.davidrangel@gmail.com</a></p>
        </div>
        <div>
          <h3>06/2013- 09/2016: Self- employed freelance photographer and food & beverage industry consultant.
          </h3>
          <p>
             With my background in the food and beverage industry and proficiency in photography it was a natural progression to marry the two and to markedly propel the quality of photographic content in the local advertising and web-based markets for area restaurants and bars. I also held intermediary positions with various local companies on a temporary basis to help assist at inception, staffing and opening. Clients include: The San Antonio Current; The San Antonio Express News; Lou Hammond Group; The Boulevardier Group; Rosella Coffee Co.; The City of San Antonio/Centro; The Empty Stomach Group; Emily Reynolds PR. My photography had been featured in several successful art exhibits as well as being featured nationally in such publications as: Imbibe; Good Morning America; Eater; Food & Wine; Garden & Gun; Texas Monthly.
          </p>
          <p>
	        Samples of work and references will be produced upon request.
          </p>
          <h3>
            10/2010- 06/2013: Manager, The Monterey.
          </h3>
          <p>
            As the anchor manager for The Monterey, one of the most progressive service and food restaurants in San Antonio, I was responsible for providing an exemplary level of service on a nightly basis to discerning patrons. I also scheduled the entire front of house staff on a two-week rotation and maintained and ordered the beer, wine, non-alcoholic beverage, and service goods (glassware, flatware, paper goods, condiment) inventory. Other duties included, but were not limited to, organizing large format special events, writing and effectively utilizing social media to promote The Monterey via Facebook, Instagram, Twitter, etc., assisting in off-site dinners and events, staff training to augment food, wine, and craft beer knowledge, accurately updating printed menus and the Aloha point-of-sale system on a daily basis, training and hiring new front of house staff, and general restaurant upkeep or minor repairs. Reported directly to the managing partner, Chad Carey.
          </p>
          <p>
		        Reference: Chad Carey, (210) 849- 3419, <a href="mailto:ccarey@regentcompanies.com">ccarey@regentcompanies.com</a>
          </p>
          <h3>
            09/2005- 08/2010: Tattooer, Divine Line Tattoos.
          </h3>
          <p>
            Tattooed for an extremely reputable and highly regarding tattoo shop. Starting as an apprentice and working up to full-fledged artist after the first year, I earned a higher wage than other artists by maintaining the shop inventory, managing the incoming daily deposits, and ordering all the shop supplies. I also kept accurate records of our clients for Texas Department of Health standards and organized an effective referral system to garner new business. I also managed the social media and photography for the artists. I would routinely travel as the assisting artist to the shop owner and was charged with making all travel reservations and adhering to strict convention schedules and procedures.
          </p>
          <p>
            Reference: Jerry Villalobos, (210) 705- 3104.
          </p>
          <h3>
            01/2004- 08/2005: Installer/Project manager, CHR Systems.
          </h3>
          <p>
            For CHR Systems I installed x-ray imaging equipment and oversaw projects for existing and new imaging rooms, either in stand-alone clinics or in hospitals. This was a highly skilled, precision mechanical job involving specialty tools and I was required to follow strict guidelines for installation and removal of equipment such as fluoroscopic x-ray machines, catheterization laboratory scanning units, magnetic resonance imaging (MRI) scanners, or computed tomography (CT) scanners.
          </p>
          <p>
            Reference: Stephen “Rusty” Jones, (210) 558-8387,  <a href="mailto:rustyjones@chrmedical.com">rustyjones@chrmedical.com</a>
          </p>
        </div>
        <Footer/>
      </section>
    )
  }
})
