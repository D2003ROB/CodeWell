package codewellBE::Helper::User;

use strict;
use warnings;

use parent qw/Exporter/;
our @EXPORT = qw/validate_confirmed_password
  validate_mail
  validate_mail_existence
  validate_password
  validate_username_existence/;
our @EXPORT_OK = @EXPORT;
our $VERSION = '1';

use Email::Valid;

sub validate_username_existence {
  my ($controller, $username) = @_;
  my $user = $controller->db->resultset('User')->by_key('id', $username);
  return !(defined $user);
}

sub validate_password {
  my $password = shift;
  return length $password > 9;
}

sub validate_confirmed_password {
  my ($controller, $password, $confirmed_password) = @_;
  return $password eq $confirmed_password;
}

sub validate_mail {
  my $mail = shift;
  return Email::Valid->address($mail);
}

sub validate_mail_existence {
  my ($controller, $mail) = @_;
  my $user = $controller->db->resultset('User')->by_key('mail', $mail);
  return !(defined $user);
}

1;
