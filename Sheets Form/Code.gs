const SHEET_NAME = "Responses";

function doPost(e) {
  try {
    const body = e.postData ? e.postData.contents : null;
    if (!body) return _json({ ok: false, reason: "No body" });

    let data;
    try {
      data = JSON.parse(body);
    } catch {
      data = e.parameter || {};
    }

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];

    _ensureHeader(sheet, ["Timestamp", "Name", "Email", "Phone", "Message", "UserAgent", "CreatedAt"]);

    const row = [
      new Date(),                    // Timestamp
      data.name || "",
      data.email || "",
      data.phone || "",
      data.message || "",
      data.userAgent || "",
      data.createdAt || ""
    ];
    sheet.appendRow(row);

    return _json({ ok: true });
  } catch (error) {
    return _json({ ok: false, error: String(error) });
  }
}

function _json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function _ensureHeader(sheet, headers) {
  const firstRow = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
  const isEmpty = firstRow.every(v => v === "");
  if (isEmpty) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.setFrozenRows(1);
  }
}

