import com.webpage.checker.CheckerService
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Assertions.assertFalse
import org.junit.jupiter.api.Assertions.assertTrue
import org.junit.jupiter.api.Test

internal class CheckerApplicationTests {

    @Test
    fun `Test New Development Counts`() {
        // val document = Jsoup.connect("https://www.ankenyiowa.gov/our-city/maps/new-development").get()
        val existingProjects = arrayListOf("2405 N Ankeny Blvd","7 Brew","704 SW Des Moines St","Ankeny Elementary #12","Ankeny Market Village","Ankeny Ortho","Aspen Ridge Foot/Ankle Clinic","Brakes Plus","Briarwood Plat 23, Lot 1","Brownstones at The District Phase 2","Canyon Landing Duplexes Plat 1","Canyon Landing Plat 2","Canyon Landing Townhomes Plat 1","Centennial Estates Plat 3","COSTCO","Courtyards at Harvest Ridge Plat 4","Discount Tire","District Building 5","Fieldhouse","Four Mile Distribution Center South","Grove Landing Plat 5 &amp; 6","Heartland Dental Clinic","Heritage at Prairie Trail Plat 2, Lot 2","Home2.TRU Hotel","Housby","Hulsizer Commercial Lots 1 &amp; 2","I-35 Distribution Center","Keystone Church","Kimberley Estates Plat 2","Lot 1, District at Prairie Trail Plat 10","Lot 1, Vintage Business Park at Prairie Trail Plat 2","Lot 1, Vintage Business Park at Prairie Trail Plat 8","NAPA Auto Parts Expansion","Northgate East Plat 3","Northgate Plat 6","Northview Lot 5","On With Life","Otter Creek Office Space","Parkway Townhomes at Prairie Trail Plat 1","PDI Site Addition","Popeye's Restaurant","QRS Development (Echo Electric)","RE/MAX Precision Sales Office","Redwood Ankeny Miller Plat 1","Ryan Warehouse II","Spectrum 36","SW Des Moines Street Parks - Phase 1","Swanwood Industrial Park Plat 2, Lot 1","Taylored Expressions","The Crossings at Deer Creek Plat 12","The Reserve at the Grove","The Sterling North at Prairie Trail Plat 1","Vintage Business Park Plat 10")
        assertFalse(CheckerService.retrieveNewProjects(existingProjects))
    }

    @Test
    fun `Test Adoptium 11 Version`() {
        val reportUrl = "https://github.com/jonathanlermitage/software-updates-bot/blob/master/report/report.md"
        assertEquals("jdk-11.0.16.1+1", CheckerService.retrieveSoftwareVersions(reportUrl, " Adoptium jdk11 linux x64"))
    }

    @Test
    fun `Test Adoptium jdk17 Version`() {
        val reportUrl = "https://github.com/jonathanlermitage/software-updates-bot/blob/master/report/report.md"
        assertEquals("jdk-17.0.4.1+1", CheckerService.retrieveSoftwareVersions(reportUrl, "Adoptium jdk17 linux x64"))
    }

    @Test
    fun `Test Maven Version`() {
        val reportUrl = "https://github.com/jonathanlermitage/software-updates-bot/blob/master/report/report.md"
        assertEquals("3.8.6", CheckerService.retrieveSoftwareVersions(reportUrl, "Maven"))
    }

    @Test
    fun `Test CentOS Version`() {
        val reportUrl = "https://hub.docker.com/v2/repositories/library/centos/"
        assertTrue(CheckerService.retrieveCentOSVersion(reportUrl, "[`centos7`, `7`, `centos7.9.2009`, `7.9.2009`]"))
    }
}
