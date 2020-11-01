import com.webpage.checker.CheckerService
import org.junit.jupiter.api.Assertions.assertFalse
import org.junit.jupiter.api.Test

internal class CheckerApplicationTests {
    private val newDevelopmentUrl = "https://www.ankenyiowa.gov/our-city/maps/new-development"

    @Test
    fun `Test New Development Counts`() {
        assertFalse(CheckerService.retrieveNewProjects(newDevelopmentUrl))
    }
}