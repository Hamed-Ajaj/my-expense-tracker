DROP TABLE `categories`;--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_transactions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`category` text NOT NULL,
	`date` text NOT NULL,
	`amount` real NOT NULL,
	`type` text NOT NULL,
	`note` text
);
--> statement-breakpoint
INSERT INTO `__new_transactions`("id", "title", "category", "date", "amount", "type", "note") SELECT "id", "title", "category", "date", "amount", "type", "note" FROM `transactions`;--> statement-breakpoint
DROP TABLE `transactions`;--> statement-breakpoint
ALTER TABLE `__new_transactions` RENAME TO `transactions`;--> statement-breakpoint
PRAGMA foreign_keys=ON;