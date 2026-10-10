function ExecuteScript(strId)
{
  switch (strId)
  {
      case "61DfZ5cXXTA":
        Script1();
        break;
  }
}

function Script1()
{
  // ===== Hanya bagian ini yang perlu diubah =====
var URL_APPS_SCRIPT = "https://script.google.com/macros/s/AKfycby7XWxW9_8lgraXrl6eQ92p_9ZGLE6Q3yHpGuAGKJlcl88cAB3ExM_TQvTt1OhluK1cgA/exec";
var KODE_KELAS = "6C-2026"; 
var NAMA_LATIHAN = "Latihan 1";
// ===============================================

var player = GetPlayer();

var data = {
  kode: KODE_KELAS,
  nama: player.GetVar("namalengkap"),
  kelas: player.GetVar("kelas"),
  latihan: NAMA_LATIHAN,
  skor: player.GetVar("Results.ScorePercent")
};

fetch(URL_APPS_SCRIPT, {
  method: "POST",
  mode: "no-cors",
  headers: { "Content-Type": "text/plain;charset=utf-8" },
  body: JSON.stringify(data)
});
}

