package com.webpage.checker

import org.jsoup.Jsoup
import org.jsoup.nodes.Element
import org.springframework.stereotype.Service

@Service
class CheckerService {
    companion object {
        private const val SECTION_LIST_CLASS = "facility_title_td"
        private val EXISTING_PROJECTS = arrayListOf("Ankeny Parks Maintenance Facility Improvements", "Ankeny Public Services Building", "Ankeny Senior Community Center", "Brinmore Estates Plat 3", "Brownstones at The District Phase 2", "Centennial Estates Plat 1", "Chalet at Prairie Trail Plat 1", "Chautauqua Park Townhomes Plat 2", "Courtyards at Harvest Ridge Plat 1", "Dewey Jeep Dodge Collision Center", "District Lofts", "Extra Space Storage", "Heritage Village Townhouse Plat 5", "Hidden Creek Commercial Phase 2", "Hulsizer Commercial Lots 1 &amp; 2", "IBEW Local 347", "Kreg Tool World Headquarters", "Lot 1, The District at Prairie Trail Lot 5", "Ankney, IA 50023", "Metro Crossing", "Mister Car Wash", "Otter Creek Commercial Plat 3", "Peterbilt", "Plaza Shops", "Purfood West Office Addition", "Ryan Warehouse", "Scooter's Coffee", "Starbucks", "Ankney, IA 50023", "Sunnyview Care Center - 2019 Expansion", "The Crossings at Deer Creek Plat 9", "The District Towers", "The Village at Aspen Ridge Estates Plat 1", "TJX Homegoods", "Trestle Ridge Estates Plat 4", "Trestle Ridge Estates Plat 5", "Veridian Credit Union")

        fun retrieveNewProjects(url: String): Boolean {
            val document = Jsoup.connect(url).get()
            val elements = document.getElementsByClass(SECTION_LIST_CLASS)
            if (elements.isEmpty()) {
                return false
            }
            var newResults = false
            for (element in elements) {
                val projectName = element.childNode(0).childNode(0).toString()
                if (projectName !in EXISTING_PROJECTS) {
                    newResults = true
                    println(projectName)
                }
            }
            return newResults
        }

        fun retrieveDynastyDate(url: String): String {
            val document = Jsoup.connect(url).get()
            return document.select("span[data-dateformat]").first().childNode(0).toString()
        }

        fun retrieveSoftwareVersions(url: String, software: String): String {
            val document = Jsoup.connect(url).get()
            val childNodes = document.select("tbody").first().childNodes()
            for (childNode in childNodes) {
                if (childNode is Element && childNode.childNode(1).toString().contains(software)) {
                    return childNode.childNode(3).childNode(0).toString()
                }
            }
            return ""
        }
    }
}
