package com.webpage.checker

import com.google.gson.annotations.SerializedName

data class CentOSApiResponse(
    @SerializedName("full_description") val description: String
)
