const notes = (req, res) => {
    res.render('notes', { title: 'Notes' });
   };
module.exports = {
    notes
};