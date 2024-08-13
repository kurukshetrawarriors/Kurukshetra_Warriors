const textbooks = (req, res) => {
    res.render('textbooks', { title: 'Text Books' });
   };
module.exports = {
    textbooks
};