package com.webpage.checker

import com.google.gson.Gson
import org.jsoup.Jsoup
import org.jsoup.nodes.Element
import org.springframework.stereotype.Service

@Service
class CheckerService {
    companion object {
        private const val SECTION_LIST_CLASS = "facility_title_td"
        private val EXISTING_PROJECTS = arrayListOf("7305 SE Crosswinds Drive Warehouse","902 SE Shurfine Drive Warehouse Addition","Ankeny Senior Community Center","Briarwood Plat 23, Lot 1","Brownstones at The District Phase 2","Centennial Estates Plat 3","COSTCO","Dewey Jeep Dodge Collision Center","Discount Tire","District Building 5","Grove Landing Plat 1","Grove Landing Plat 2","Grove Landing Plat 3","Heritage at Prairie Trail Plat 2, Lot 2","Hulsizer Commercial Lots 1 &amp; 2","I-35 Distribution Center","Kimberley Crossing Plat 1","Lot 1, District at Prairie Trail Plat 10","Lot 1, Vintage Business Park at Prairie Trail Plat 8","Lutheran Church of Hope","Northgate East Plat 3","OSPC","Otter Creek Commercial Plat 3","Otter Creek Office Space","PDI Site Addition","Pet Parents","Peterbilt","Plaza Shops","Pons Plaza","Popeye's Restaurant","QRS Development (Echo Electric)","Redwood Ankeny Miller Plat 1","Slim Chickens","Snyder Development Intersection Improvements","Spectrum 36","Sunnyview Care Center - 2019 Expansion","Swanwood Industrial Park Plat 1, Lot 1","Swanwood Industrial Park Plat 2, Lot 1","Taylored Expressions","The Crossings at Deer Creek Plat 12","The Crossings at Deer Creek Plat 14","The District Towers","The Standard at 36th","The Sterling North at Prairie Trail Plat 1","TJX Homegoods","Trestle Ridge Estates Plat 6")

        fun retrieveNewProjects(url: String): Boolean {
            val document = Jsoup.connect(url).get()
            val elements = document.getElementsByClass(SECTION_LIST_CLASS)
            if (elements.isEmpty()) {
                return false
            }
            for (element in elements) {
                val projectName = element.childNode(0).childNode(0).toString()
                println(projectName)
                if (projectName !in EXISTING_PROJECTS) {
                    return true
                }
            }
            return false
        }

        fun retrieveDynastyDate(url: String): String {
            val document = Jsoup.connect(url).get()
            return document.select("span[data-dateformat]")?.first()?.childNode(0).toString()
        }

        fun retrieveETRDynastyDate(url: String): String {
            val document = Jsoup.connect(url).followRedirects(true).get()
            return document.childNode(2).childNode(3).childNode(3).childNode(9).childNode(1).childNode(1).childNode(1).childNode(1).childNode(1).childNode(1).childNode(3).childNode(2).childNode(0).toString()
        }

        fun retrieveSoftwareVersions(url: String, software: String): String {
            val document = Jsoup.connect(url).get()
            val childNodes = document.select("tbody")?.first()?.childNodes()
            for (childNode in childNodes.orEmpty()) {
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
