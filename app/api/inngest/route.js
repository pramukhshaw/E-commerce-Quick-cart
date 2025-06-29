// app/api/inngest/route.js

import { serve } from "inngest/next";
import { inngest } from "@/inngest/client"; // Use alias if set up properly
import {
  syncUserCreation,
  syncUserDeletion,
  syncUserUpdation,
} from "@/config/inngest";

// Serve your Inngest functions as API endpoints
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion
  ],
});
