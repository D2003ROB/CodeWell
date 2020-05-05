package codewellBE::Schema::Result::User;
use base qw/DBIx::Class::Core/;

__PACKAGE__->table('users');

__PACKAGE__->add_columns(
  id => {
    data_type => 'text',
  },

  first_name => {
    data_type => 'text',
    is_nullable => 0,
  },

  last_name => {
    data_type => 'text',
    is_nullable => 0,
  },

  password => {
    data_type => 'text',
    is_nullable => 0,
  },

  mail => {
    data_type => 'text',
    is_nullable => 0
  }
);
__PACKAGE__->set_primary_key('id');
__PACKAGE__->add_unique_constraint([ qw/mail/ ]);

1;
