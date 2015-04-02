module.exports = function (grunt) {
  var packageJSON = {
    name: 'blocks',
    version: grunt.config.get('version'),
    description: 'jsblocks - Better MV-ish Framework',
    main: 'blocks.js',
    keyword: ['MVC', 'MVVM', 'MVW', 'server rendering', 'filtering', 'sorting', 'paging', 'framework'],
    scripts: {
      'test': 'echo \'Error: no test specified\' && exit 1'
    },
    repository: {
      type: 'git',
      url: 'https://github.com/astoilkov/jsblocks.git'
    },
    author: {
      name: 'Antonio Stoilkov',
      email: 'antonio.stoilkov@gmail.com',
      url: 'http://jsblocks.com'
    },
    license: 'MIT',
    bugs: {
      url: 'https://github.com/astoilkov/jsblocks/issues',
      email: 'support@jsblocks.com'
    },
    homepage: 'https://github.com/astoilkov/jsblocks',
    devDependencies: {
      parse5: "1.4.1"
    }
  };

  grunt.registerTask('npm', function () {
    grunt.file.write('dist/npm/package.json', JSON.stringify(packageJSON));
    grunt.file.write('dist/npm/blocks.js', grunt.file.read('dist/blocks-node.js'));
  });
};