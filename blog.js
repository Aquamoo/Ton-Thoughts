$(function () {
    var APPLICATION_ID = "A4E158BD-7A3D-F46A-FF88-4FFB232E9E00",
    SECRET_KEY = "47E0BFC1-008C-4A8F-FF9D-04B99DA5BE00",
    VERSION = "v1";
    
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    
    var postsCollection = Backendless.Persistence.of(Posts).find();
    
    console.log(postsCollection); 
    
    var wrapper = {
        posts: postsCollection.data
    };
    
    Handlebars.registerHelper('format', function (time) {
        return moment(time).format("dddd, MMMM Do YYYY")
    });
    
    var blogScript = $("#blogs-template").html();
    var blogTemplate = Handlebars.compile(blogScript);
    var blogHTML = blogTemplate(wrapper);
    
    
    $('.main-container').html(blogHTML);
    
    });
    
    function Posts(args) {
        args = args || {      };
        this.title = args.title || "";
        this.content = args.content || "";
        this.authorEmail = args.authorEmail || "";
    }