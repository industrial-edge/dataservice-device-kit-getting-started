﻿topicarray["4af2b77b002f3b590f176115edec8c74"] = {"Html":"\u003c?xml version=\"1.0\" encoding=\"utf-16\"?\u003e\u003chtml xmlns:msxsl=\"urn:schemas-microsoft-com:xslt\"\u003e\u003cdiv class=\"main_body\"\u003e\u003cbr /\u003e\u003cdiv class=\"content_body\"\u003e\u003cdiv class=\"body_headline\" style=\"display:none;\"\u003eAnwendungsbeispiel\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"quintessence\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eBeschreibung\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Dieses Anwendungsbeispiel soll Ihnen zeigen, wie man eigenen Apps Zugriff auf den \"Data Service\" gewährt.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Sie werden einen Benutzer anlegen, einen Token anfordern und die Assets, Variablen und Zeitreihendaten aus der App abrufen.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Folgende Schritte müssen Sie vorher noch durchführen:\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"introduction\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eBuild (bauen) und Execute (ausführen)\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Um das Projekt zu bauen, gehen Sie folgendermaßen vor:\u003c/span\u003e\u003c/div\u003e\u003col class=\"floating-text\"\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Laden Sie sich die notwendigen Node Module herunter.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Öffnen Sie dafür im Ordner mit der Datei \"package.json\" die Kommandozeile und geben Sie folgende Kommandos ein:\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ol\u003e\u003cdiv class=\"floating-text ul-container\"\u003e\u003cul class=\"bullet\"\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"code\"\u003enpm install\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"code\"\u003enpm run build\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"code\"\u003enpm run start\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Die App wird im Browser mit dem Localhost \"https://localhost:5200\" gestartet. \u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"introduction\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eVoraussetzung\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Die App \u003c/span\u003e\u003cspan\u003e​Data Service\u003c/span\u003e\u003cspan\u003e​ sollte ausgeführt werden und die \u003c/span\u003e\u003cspan\u003e​Configuration UI\u003c/span\u003e\u003cspan\u003e​ sollte laufen, sonst wird beim Zugriff auf die untenstehenden Routes eine fehlerhafte Verbindung bereitgestellt.\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"introduction\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eLogische Ansicht\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Die logische Darstellung ist wie folgt unterteilt:\u003c/span\u003e\u003c/div\u003e\u003cspan class=\"imagecontainer inserted-object has-no-image-title has-no-image-legend\"\u003e\u003cdiv class=\"box-before-thumbnail-box\"\u003e​\u003c/div\u003e\u003cimg src=\"images/143546897547_DV_resource.Stream@PNG-de-DE.png\" docVersionId=\"144683960843\" language=\"de-DE\" class=\"img_free\" data-type=\"fall3\" data-img-type=\"Screenshot\" data-original-height=\"382\" data-original-width=\"849\" data-resolution-x=\"200\" data-resolution-y=\"200\" id=\"144683960843_4af2b77b002f3b590f176115edec8c74_143546897547_DV_resource_ID0ANB0PB\" data-width=\"661\" /\u003e\u003c/span\u003e\u003cdiv class=\"floating-text ul-container\"\u003e\u003cul class=\"bullet\"\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Feature: Die Routes werden hier bereitgestellt und der größte Teil der Integration für das Token und die Kommunikation mit dem Client wird in dieser Klasse erledigt.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Token Manager: Bei jedem Aufruf, wird das Token vom Datendienst abgerufen. Es ist jedoch ratsam zwischenzuspeichern bis zu dem Zeitpunkt, an dem es abläuft (30 Minuten). Die Anforderung zum erneuten Speichern vom Token sollte idealerweise nach jedem Ablauf erfolgen.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Data Service Client: Diese Klasse hilft bei der Konfiguration der Data Service URL und beim Herstellen der Verbindung. Auch die Authorization-Header für die http-Anfrage werden hier verwaltet.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"introduction\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eBenutzer erstellen und Token Management\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Eine App kann für den Zugriff auf den Data Service einen Benutzer erfordern. Dieser Benutzer stellt einen Token zur Verfügung, der verwendet werden kann um Aufrufe zum Data Service zu machen. Die Lebensdauer des Token beträgt 30 Minuten, wenn der Benutzer während dieser Lebensdauer verfügbar ist. Für die Benutzererstellung und das Token Management verwenden Sie bitte das Feature (/User/create) und die Token Manager Klasse (getAuthorizationToken()).\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"introduction\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eAssets, Variablen und Zeitreihen-Informationen\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Der gleiche Token, von dem oben gesprochen wird, kann verwendet werden, um jede Operation im Data Service durchzuführen. Die Token, die nicht auslaufen, werden abgerufen und dem Request-Header hinzugefügt, um eine Liste von allen bzw. den jeweils benötigten Assets und Variablen abzurufen. Um Zeitreihen-Informationen abzurufen, wird im Feature die Methode \"getTimeSeries\" zur Verfügung gestellt.\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/html\u003e"}