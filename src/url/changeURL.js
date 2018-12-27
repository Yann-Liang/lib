function changeURL (name, value) {
  const url = location.href,
    pattern = name + '=([^&]*)',
    replaceText = name + '=' + value;

  let result = '';

  if (url.match (pattern)) {
    const tmp = '/(' + name + '=)([^&]*)/gi';

    result = url.replace (eval (tmp), replaceText);
  } else {
    if (url.match ('[\?]')) {
      result = url + '&' + replaceText;
    } else {
      result = url + '?' + replaceText;
    }
  }
  history.pushState ({}, 0, result);
}

exports = changeURL;
