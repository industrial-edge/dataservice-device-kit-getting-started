﻿topicarray["4af2b77b002f3b590f176115edec8c74"] = {"Html":"\u003c?xml version=\"1.0\" encoding=\"utf-16\"?\u003e\u003chtml xmlns:msxsl=\"urn:schemas-microsoft-com:xslt\"\u003e\u003cdiv class=\"main_body\"\u003e\u003cbr /\u003e\u003cdiv class=\"content_body\"\u003e\u003cdiv class=\"body_headline\" style=\"display:none;\"\u003eApplication example\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"quintessence\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eDescription\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​This application example is intended to show you how to grant access to the \"Data Service\" to your own apps.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​You will create a user, request a token and get the assets, tags and time series data from the app.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​You must carry out the following steps beforehand:\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"introduction\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eBuild and execute\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​To build the project, follow these steps:\u003c/span\u003e\u003c/div\u003e\u003col class=\"floating-text\"\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Download the required Node modules.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​To do this, open the command line in the folder with the \"package.json\" file and enter the following commands:\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ol\u003e\u003cdiv class=\"floating-text ul-container\"\u003e\u003cul class=\"bullet\"\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"code\"\u003enpm install\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"code\"\u003enpm run build\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"code\"\u003enpm run start\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​The app is started in the browser with the local host \"https://localhost:5200\". \u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"introduction\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eRequirement\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​The \u003c/span\u003e\u003cspan\u003e​Data Service\u003c/span\u003e\u003cspan\u003e​ app should be executed and the \u003c/span\u003e\u003cspan\u003e​Configuration UI\u003c/span\u003e\u003cspan\u003e​ should be running; otherwise, an incorrect connection is provided when accessing the routes below.\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"introduction\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eLogical view\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​The logical representation is divided as follows:\u003c/span\u003e\u003c/div\u003e\u003cspan class=\"imagecontainer inserted-object has-no-image-title has-no-image-legend\"\u003e\u003cdiv class=\"box-before-thumbnail-box\"\u003e​\u003c/div\u003e\u003cimg src=\"images/143546897547_DV_resource.Stream@PNG-de-DE.png\" docVersionId=\"144683960843\" language=\"en-US\" class=\"img_free\" data-type=\"fall3\" data-img-type=\"Screenshot\" data-original-height=\"382\" data-original-width=\"849\" data-resolution-x=\"200\" data-resolution-y=\"200\" id=\"144683960843_4af2b77b002f3b590f176115edec8c74_143546897547_DV_resource_ID0ANB0PB\" data-width=\"661\" /\u003e\u003c/span\u003e\u003cdiv class=\"floating-text ul-container\"\u003e\u003cul class=\"bullet\"\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Feature: The routes are provided here and most of the integration for the token and communication with the client is done in this class.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Token manager: With each call, the token is retrieved from the data service. However, it is advisable to store temporarily until the time it expires (30 minutes). The request to re-save from the token should ideally occur after each expiration.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Data Service client: This class helps to configure the Data Service URL and establish the connection. The authorization headers for the http request are also managed here.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"introduction\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eCreating users and token management\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​An app can require a user to access the data service. This user provides a token that can be used to make calls to the Data Service. The lifetime of the token is 30 minutes if the user is available during this lifetime. For user creation and token management please use the feature (/User/create) and the token manager class (getAuthorizationToken()).\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"introduction\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eAssets, tags and time series information\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​The same token mentioned above can be used to perform any operation in the Data Service. The tokens that do not expire are retrieved and added to the request header to retrieve a list of all or each of the required assets and tags. To call up time series information, the \"getTimeSeries\" method is provided in the feature.\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/html\u003e"}