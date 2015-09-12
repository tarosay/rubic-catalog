require "jsduck/tag/boolean_tag"

class LanguageTag < JsDuck::Tag::BooleanTag
end

class Ruby < LanguageTag
  def initialize
    @pattern = "ruby"
    @signature = {:long => "Ruby", :short => "R B"}
    @css = ".signature .ruby { background-color: #c7311d; }"
    super
  end
end

class Python < LanguageTag
  def initialize
    @pattern = "python"
    @signature = {:long => "Python", :short => "P Y"}
    @css = ".signature .python { background-image: linear-gradient(#365d9c 6px, #ffd24a 6px); }"
    super
  end
end

class JavaScript < LanguageTag
  def initialize
    @pattern = "javascript"
    @signature = {:long => "JavaScript", :short => "J S"}
    @css = ".signature .javascript { background-color: #d5ba31; }"
    super
  end
end

