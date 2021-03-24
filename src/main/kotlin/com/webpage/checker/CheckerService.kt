package com.webpage.checker

import com.google.gson.Gson
import org.jsoup.Jsoup
import org.jsoup.nodes.Element
import org.springframework.stereotype.Service

@Service
class CheckerService {
    companion object {
        private const val SECTION_LIST_CLASS = "facility_title_td"
        private val EXISTING_PROJECTS = arrayListOf("Ankeny Senior Community Center","Aspen Ridge Commercial","Brownstones at The District Phase 2","Casey's General Store","Centennial Estates Plat 2","Centennial Ridge Plat 2","Chalet at Prairie Trail Plat 1","Chautauqua Park Townhomes Plat 2","Corporate Woods Business Park Plat 5","Courtyards at Harvest Ridge Plat 1","Deer Creek South Townhomes Plat 2","Dewey Jeep Dodge Collision Center","District Lofts","Greystones at Prairie Trail Plat 1","Heritage Village Townhouse Plat 5","Hidden Creek Commercial Phase 2","Hulsizer Commercial Lots 1 &amp; 2","IBEW Local 347","Kreg Tool World Headquarters","Lutheran Church of Hope","Metro Crossing","Northgate Plat 3","Otter Creek Commercial Plat 3","Parkway North Plat 3","Pet Parents","Peterbilt","Plaza Shops","Pons Plaza","Purfood West Office Addition","Ryan Warehouse","Sunnyview Care Center - 2019 Expansion","The Crossings at Deer Creek Plat 10","The District Towers","The Standard at 36th","The Village at Aspen Ridge Estates Plat 1","TJX Homegoods","Trestle Ridge Estates Plat 5","UnityPoint Clinic at Highpointe North","Veridian Credit Union","Willis Preowned Sales")

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

        fun retrieveDynastyTitle(url: String): List<String> {
            val document = Jsoup.connect(url).followRedirects(true).get()
            val title = document.childNode(2).childNode(3).childNode(1).childNode(9).childNode(1).childNode(1).childNode(1).childNode(1).childNode(1).childNode(1).childNode(1).childNode(0).toString()
            val date = document.childNode(2).childNode(3).childNode(1).childNode(9).childNode(1).childNode(1).childNode(1).childNode(1).childNode(1).childNode(1).childNode(3).childNode(2).childNode(0).toString()
            return arrayListOf(title, date)
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

        fun retrieveCentOSVersion(url: String, version: String): Boolean {
            val json = Jsoup.connect(url).ignoreContentType(true).timeout(30000).get().text()
            val apiResponse = Gson().fromJson(json, CentOSApiResponse::class.java).toString()
            return apiResponse.contains(version)
        }
    }
}
