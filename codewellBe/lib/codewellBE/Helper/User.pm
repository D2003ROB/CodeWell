package codewellBE::Helper::User;

use strict;
use warnings;

use parent qw/Exporter/;
our @EXPORT = qw/
  validate_password
/;
our @EXPORT_OK = @EXPORT;
our $VERSION = '1';

sub validate_password {
  my $password = shift;
  return length $password > 9;
}
1;
