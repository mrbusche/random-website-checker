package com.webpage.checker

import com.google.gson.Gson
import org.jsoup.Jsoup
import org.jsoup.nodes.Element
import org.springframework.stereotype.Service

@Service
class CheckerService {
    companion object {
        fun retrieveSoftwareVersions(url: String, software: String): String {
            val document = Jsoup.connect(url).get()
            val childNodes = document.select("tbody").first()?.childNodes()
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
