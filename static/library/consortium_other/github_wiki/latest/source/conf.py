
project = u'DATRO Wiki'
copyright = u'2021, DATRO Consortium'
author = u'DATRO Consortium'

version = u'0.0.0'
release = u'0.0.0'



extensions = ['sphinx.ext.autosectionlabel']

templates_path = ['_templates']

source_suffix = '.rst'

master_doc = 'index'

language = None

#today_fmt = 'May 02, 2021'


exclude_patterns = ['_build']


pygments_style = None


html_theme = 'sphinx_rtd_theme'



html_static_path = ['_static']


htmlhelp_basename = 'consortium_other-github_wiki'


latex_elements = { 'classoptions': ',openany,oneside', 'babel' : '\\usepackage[english]{babel}' }


latex_documents = [
    (master_doc, 'consortium_other-github_wiki.tex', u'DATRO Consortium',
     u'Author(s): DATRO Consortium', 'manual'),
]


man_pages = [
    (master_doc, 'consortium_other-github_wiki', u'DATRO Consortium',
     [author], 1)
]



texinfo_documents = [
    (master_doc, 'consortium_other-github_wiki', u'DATRO Consortium',
     author, 'consortium_other-github_wiki', 'DATRO Consortium',
     'manual'),
]


epub_title = project


epub_exclude_files = ['search.html']