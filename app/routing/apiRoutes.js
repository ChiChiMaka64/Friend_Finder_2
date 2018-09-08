var castData=require("../data/friends");
module.exports=function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(castData);
      });
}
app.post("/api/friends", function(req, res) {
    if (castData.length < 20) {
        castData.push(req.body);
        res.json(true);
      }
    });
    app.post("/api/clear", function(req, res) {
        castData.length = [];
        res.json({ ok: true });
  });
