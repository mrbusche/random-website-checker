import com.webpage.checker.CheckerService
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Assertions.assertFalse
import org.junit.jupiter.api.Assertions.assertTrue
import org.junit.jupiter.api.Test

internal class CheckerApplicationTests {

    @Test
    fun `Test New Development Counts`() {
        val existingProjects = arrayListOf("7 Brew","704 SW Des Moines St","7305 SE Crosswinds Drive Warehouse","Ankeny Elementary #12","Ankeny Ortho","Brakes Plus","Briarwood Plat 23, Lot 1","Brownstones at The District Phase 2","Canyon Landing Duplexes Plat 1","Canyon Landing Plat 2","Canyon Landing Townhomes Plat 1","Centennial Estates Plat 3","COSTCO","Discount Tire","District Building 5","Fieldhouse","Four Mile Distribution Center South","Grove Landing Plat 2","Grove Landing Plat 3","Grove Landing Plat 5 &amp; 6","Heartland Dental Clinic","Heritage at Prairie Trail Plat 2, Lot 2","Home2.TRU Hotel","Hulsizer Commercial Lots 1 &amp; 2","I-35 Distribution Center","Keystone Church","Kimberley Crossing Plat 1","Lot 1, District at Prairie Trail Plat 10","Lot 1, Vintage Business Park at Prairie Trail Plat 2","Lot 1, Vintage Business Park at Prairie Trail Plat 8","Northgate East Plat 3","Northgate Plat 6","On With Life","Otter Creek Commercial Plat 3","Otter Creek Office Space","Parkway Townhomes at Prairie Trail Plat 1","PDI Site Addition","Pet Parents","Plaza Shops","Popeye's Restaurant","QRS Development (Echo Electric)","Redwood Ankeny Miller Plat 1","Ryan Warehouse II","Slim Chickens","Spectrum 36","SW Des Moines Street Parks - Phase 1","Swanwood Industrial Park Plat 1, Lot 1","Swanwood Industrial Park Plat 2, Lot 1","Taylored Expressions","The Crossings at Deer Creek Plat 12","The Crossings at Deer Creek Plat 14","The Crossings at Deer Creek Plat 7","The Reserve at the Grove Plat 1","The Standard at 36th","The Sterling North at Prairie Trail Plat 1","Trestle Ridge Estates Plat 6","Vintage Business Park Plat 10")
        assertFalse(CheckerService.retrieveNewProjects(existingProjects))
    }

    @Test
    fun `Test Adoptium 11 Version`() {
        val reportUrl = "https://github.com/jonathanlermitage/software-updates-bot/blob/master/report/report.md"
        assertEquals("jdk-11.0.15+10", CheckerService.retrieveSoftwareVersions(reportUrl, " Adoptium jdk11 linux x64"))
    }

    @Test
    fun `Test Adoptium jdk17 Version`() {
        val reportUrl = "https://github.com/jonathanlermitage/software-updates-bot/blob/master/report/report.md"
        assertEquals("jdk-17.0.3+7", CheckerService.retrieveSoftwareVersions(reportUrl, "Adoptium jdk17 linux x64"))
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
