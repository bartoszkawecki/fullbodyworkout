CREATE TABLE "exercise_weights" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"week" integer NOT NULL,
	"day" integer NOT NULL,
	"exercise_name" text NOT NULL,
	"weight" numeric(5, 2) NOT NULL,
	CONSTRAINT "unique_exercise_per_day" UNIQUE("user_id","week","day","exercise_name")
);
--> statement-breakpoint
CREATE TABLE "invites" (
	"id" serial PRIMARY KEY NOT NULL,
	"code" text NOT NULL,
	"used_by" integer,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"used_at" timestamp,
	"is_active" boolean DEFAULT true NOT NULL,
	CONSTRAINT "invites_code_unique" UNIQUE("code")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"google_id" text NOT NULL,
	"email" text NOT NULL,
	"name" text,
	"picture" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_google_id_unique" UNIQUE("google_id"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "exercise_weights" ADD CONSTRAINT "exercise_weights_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "invites" ADD CONSTRAINT "invites_used_by_users_id_fk" FOREIGN KEY ("used_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;