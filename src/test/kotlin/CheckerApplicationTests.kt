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
        val dynastyUrl =
            "https://www.espn.com/fantasy/football/story/_/id/15698900/mike-clay-top-240-dynasty-fantasy-football-rankings-nfl"
        assertEquals("Oct 23, 2020", CheckerService.retrieveDynastyDate(dynastyUrl))
    }
}
