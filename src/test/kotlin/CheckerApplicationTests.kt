import com.webpage.checker.CheckerService
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Assertions.assertTrue
import org.junit.jupiter.api.Test

internal class CheckerApplicationTests {
    @Test
    fun `Test Adoptium 11 Version`() {
        val reportUrl = "https://github.com/jonathanlermitage/software-updates-bot/blob/master/report/report.md"
        assertEquals("jdk-11.0.20+8", CheckerService.retrieveSoftwareVersions(reportUrl, " Adoptium jdk11 linux x64"))
    }

    @Test
    fun `Test Adoptium jdk17 Version`() {
        val reportUrl = "https://github.com/jonathanlermitage/software-updates-bot/blob/master/report/report.md"
        assertEquals("jdk-17.0.8+7", CheckerService.retrieveSoftwareVersions(reportUrl, "Adoptium jdk17 linux x64"))
    }

    @Test
    fun `Test Adoptium jdk20 Version`() {
        val reportUrl = "https://github.com/jonathanlermitage/software-updates-bot/blob/master/report/report.md"
        assertEquals("jdk-20.0.1+9", CheckerService.retrieveSoftwareVersions(reportUrl, "Adoptium jdk20 linux x64"))
    }

    @Test
    fun `Test Maven Version`() {
        val reportUrl = "https://github.com/jonathanlermitage/software-updates-bot/blob/master/report/report.md"
        assertEquals("4.0.0-alpha-7", CheckerService.retrieveSoftwareVersions(reportUrl, "Maven"))
    }

    @Test
    fun `Test CentOS Version`() {
        val reportUrl = "https://hub.docker.com/v2/repositories/library/centos/"
        assertTrue(CheckerService.retrieveCentOSVersion(reportUrl, "[`centos7`, `7`, `centos7.9.2009`, `7.9.2009`]"))
    }
}
