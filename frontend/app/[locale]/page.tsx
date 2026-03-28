import { ExperienceSection } from '../components/ExperienceSection'
import { RadialMethodology } from '../sections/RadialMetodlogy'
import { CustomersSection } from '../sections/Customers'
import { Locations } from '../sections/Locations'
import { HeroHome } from '../sections/HeroHome'

export default async function Page() {

  return (
    <>
      <div className='w-full' >

        {/* Hero section */}
        <HeroHome />

        {/* Description section */}
        <RadialMethodology />

        {/* Experience */}
        <ExperienceSection />

        {/* Locations */}
        <Locations />

        {/* Partners */}
        <CustomersSection />

      </div>
    </>
  )
}
