exports.strip_tags = (string) =>
{
  return string.replace(/(<([^>]+)>)/ig,"");
}
