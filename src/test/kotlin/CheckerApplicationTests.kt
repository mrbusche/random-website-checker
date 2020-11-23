import com.webpage.checker.CheckerService
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Assertions.assertFalse
import org.junit.jupiter.api.Test

internal class CheckerApplicationTests {

    @Test
    fun `Test New Development Counts`() {
        val newConstructionUrl = "https://www.ankenyiowa.gov/our-city/maps/new-development"
        assertFalse(CheckerService.retrieveNewProjects(newConstructionUrl))
    }

    @Test
    fun `Test Dynasty Ranks Update`() {
        val dynastyUrl = "https://www.espn.com/fantasy/football/story/_/id/15698900/mike-clay-top-240-dynasty-fantasy-football-rankings-nfl"
        assertEquals("Oct 23, 2020", CheckerService.retrieveDynastyDate(dynastyUrl))
    }

    @Test
    fun `Test AdoptOpenJDK 8 Version`() {
        val reportUrl = "https://github.com/jonathanlermitage/software-updates-bot/blob/master/report/report.md"
        assertEquals("jdk8u275-b01", CheckerService.retrieveSoftwareVersions(reportUrl, "AdoptOpenJDK jdk8"))
    }

    @Test
    fun `Test AdoptOpenJDK 11 Version`() {
        val reportUrl = "https://github.com/jonathanlermitage/software-updates-bot/blob/master/report/report.md"
        assertEquals("jdk-11.0.9.1+1", CheckerService.retrieveSoftwareVersions(reportUrl, "AdoptOpenJDK jdk11"))
    }

    @Test
    fun `Test RHEL7 Version`() {
        val reportUrl = "https://github.com/jonathanlermitage/software-updates-bot/blob/master/report/report.md"
        assertEquals("7.9-224", CheckerService.retrieveSoftwareVersions(reportUrl, "RHEL7"))
    }

    @Test
    fun `Test RHEL7Minimal Version`() {
        val reportUrl = "https://github.com/jonathanlermitage/software-updates-bot/blob/master/report/report.md"
        assertEquals("7.9-228", CheckerService.retrieveSoftwareVersions(reportUrl, "RHEL7Minimal"))
    }
}
