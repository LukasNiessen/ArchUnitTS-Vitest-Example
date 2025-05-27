// Now following architectural rules by using the service layer
//import { DatabaseService } from '../services/database-service';

// violate the rule
import { openDB } from '../database/database-helper';

export const homepage = () => {
	// Using service layer instead of direct database access
	//DatabaseService.getInstance().openDatabase();

	// violate the rule
	openDB();
};
