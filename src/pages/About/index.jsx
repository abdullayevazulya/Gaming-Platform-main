import CardHeader from './AboutSections/WorkSections/CardHeader'
import Hero from './AboutSections/Hero'
import Cards from './AboutSections/WorkSections/Cards/Cards'
import CardSection from './AboutSections/ThirdSections/CardSection'
import TeamHeader from './AboutSections/TeamSections/TeamHeader'
import TeamItems from './AboutSections/TeamSections/TeamCards/TeamItems'

export default function About() {
 return (
  <div>
   <Hero />
   <CardHeader/>
   <Cards/>
   <CardSection/>
   <TeamHeader/>
   <TeamItems/>
  </div>
 )
}
