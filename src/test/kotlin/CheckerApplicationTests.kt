import com.webpage.checker.CheckerService
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Assertions.assertFalse
import org.junit.jupiter.api.Assertions.assertTrue
import org.junit.jupiter.api.Test

internal class CheckerApplicationTests {

    @Test
    fun `Test New Development Counts`() {
        val newConstructionUrl = "https://www.ankenyiowa.gov/our-city/maps/new-development"
        assertFalse(CheckerService.retrieveNewProjects(newConstructionUrl))
    }

    @Test
    fun `Test ESPN Dynasty Ranks Update`() {
        val dynastyUrl = "https://www.espn.com/fantasy/football/story/_/id/15698900/mike-clay-top-240-dynasty-fantasy-football-rankings-nfl"
        assertEquals("Apr 2, 2021", CheckerService.retrieveDynastyDate(dynastyUrl))
    }

    @Test
    fun `Test ETR Dynasty Ranks Update`() {
        val dynastyUrl = "https://establishtherun.com/dynasty-rankings/"
        assertEquals("Apr 2, 2021", CheckerService.retrieveETRDynastyDate(dynastyUrl))
    }

    @Test
    fun `Test AdoptOpenJDK 8 Version`() {
        val reportUrl = "https://github.com/jonathanlermitage/software-updates-bot/blob/master/report/report.md"
        assertEquals("jdk8u292-b10", CheckerService.retrieveSoftwareVersions(reportUrl, "AdoptOpenJDK jdk8"))
    }

    @Test
    fun `Test AdoptOpenJDK 11 Version`() {
        val reportUrl = "https://github.com/jonathanlermitage/software-updates-bot/blob/master/report/report.md"
        assertEquals("jdk-11.0.11+9", CheckerService.retrieveSoftwareVersions(reportUrl, "AdoptOpenJDK jdk11"))
    }

    @Test
    fun `Test RHEL7 Version`() {
        val reportUrl = "https://github.com/jonathanlermitage/software-updates-bot/blob/master/report/report.md"
        assertEquals("7.9-367", CheckerService.retrieveSoftwareVersions(reportUrl, "RHEL7"))
    }

    @Test
    fun `Test RHEL7Minimal Version`() {
        val reportUrl = "https://github.com/jonathanlermitage/software-updates-bot/blob/master/report/report.md"
        assertEquals("7.9-368", CheckerService.retrieveSoftwareVersions(reportUrl, "RHEL7Minimal"))
    }

    @Test
    fun `Test Maven Version`() {
        val reportUrl = "https://github.com/jonathanlermitage/software-updates-bot/blob/master/report/report.md"
        assertEquals("3.8.1", CheckerService.retrieveSoftwareVersions(reportUrl, "Maven"))
    }

    @Test
    fun `Test CentOS Version`() {
        val reportUrl = "https://hub.docker.com/v2/repositories/library/centos/"
        assertTrue(CheckerService.retrieveCentOSVersion(reportUrl, "[`centos7`, `7`, `centos7.9.2009`, `7.9.2009`]"))
    }
}
