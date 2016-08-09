var template = function (){

  // Grab the template script
  var theTemplateScript = $("#post-template").html();

  // Compiles the template
  var theTemplate = Handlebars.compile( theTemplateScript );

  // Register a helper
  Handlebars.registerHelper( 'grouped_each', function(every, context, options){
    var out = "", subcontext = [], i;
    if( context && context.length > 0 ){
        for( i = 0; i < context.length; i++ ){
            if( i > 0 && i % every === 0 ){
                out += options.fn( subcontext );
                subcontext = [];
            }
            subcontext.push( context[i] );
        }
        out += options.fn( subcontext );
    }
    return out;
  });

  Handlebars.registerHelper( 'each_upto', function(ary, max, options) {
      if( !ary || ary.length == 0 )
          return options.inverse( this );

      var result = [ ];
      for( var i = 0; i < max && i < ary.length; ++i )
          result.push( options.fn(ary[i]) );
      return result.join('');
  });

  // array of objects
  var context = {
    posts: postsArr
  }

  // Pass data to the template
  var theCompiledHtml = theTemplate( context );

  // Add the compiled html to the page
  $('.content-placeholder').html( theCompiledHtml );

};
