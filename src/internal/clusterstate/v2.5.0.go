package clusterstate

import (
	"github.com/pachyderm/pachyderm/v2/src/internal/migrations"

	v2_5_0 "github.com/pachyderm/pachyderm/v2/src/internal/clusterstate/v2.5.0"
)

var state_2_5_0 migrations.State = v2_5_0.Migrate(state_2_3_0)

// DO NOT MODIFY THIS STATE
// IT HAS ALREADY SHIPPED IN A RELEASE
