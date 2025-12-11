export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      courtside_waitlist: {
        Row: {
          company: string | null
          email: string | null
          id: string
          imported_at: string
          name: string | null
          phone: string | null
        }
        Insert: {
          company?: string | null
          email?: string | null
          id?: string
          imported_at?: string
          name?: string | null
          phone?: string | null
        }
        Update: {
          company?: string | null
          email?: string | null
          id?: string
          imported_at?: string
          name?: string | null
          phone?: string | null
        }
        Relationships: []
      }
      kc_bookings: {
        Row: {
          attendee_email: string | null
          attendee_first_name: string | null
          attendee_name: string
          booking_date_toronto: string | null
          code_sent: boolean | null
          deleted_at: string | null
          end_at: string
          end_at_toronto: string | null
          inserted_at: string
          last_seen_at: string
          price: number | null
          source: string
          space: string
          start_at: string
          start_at_toronto: string | null
          status: string
          summary: string | null
          summary_email: string | null
          summary_first_name: string | null
          summary_phone: string | null
          uid: string
          updated_at: string
        }
        Insert: {
          attendee_email?: string | null
          attendee_first_name?: string | null
          attendee_name: string
          booking_date_toronto?: string | null
          code_sent?: boolean | null
          deleted_at?: string | null
          end_at: string
          end_at_toronto?: string | null
          inserted_at?: string
          last_seen_at?: string
          price?: number | null
          source: string
          space: string
          start_at: string
          start_at_toronto?: string | null
          status: string
          summary?: string | null
          summary_email?: string | null
          summary_first_name?: string | null
          summary_phone?: string | null
          uid: string
          updated_at?: string
        }
        Update: {
          attendee_email?: string | null
          attendee_first_name?: string | null
          attendee_name?: string
          booking_date_toronto?: string | null
          code_sent?: boolean | null
          deleted_at?: string | null
          end_at?: string
          end_at_toronto?: string | null
          inserted_at?: string
          last_seen_at?: string
          price?: number | null
          source?: string
          space?: string
          start_at?: string
          start_at_toronto?: string | null
          status?: string
          summary?: string | null
          summary_email?: string | null
          summary_first_name?: string | null
          summary_phone?: string | null
          uid?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      v_kc_bookings_ordered: {
        Row: {
          attendee_email: string | null
          attendee_first_name: string | null
          attendee_name: string | null
          booking_date_toronto: string | null
          code_sent: boolean | null
          deleted_at: string | null
          end_at: string | null
          end_at_utc: string | null
          inserted_at: string | null
          last_seen_at: string | null
          price: number | null
          source: string | null
          space: string | null
          start_at: string | null
          start_at_utc: string | null
          status: string | null
          summary: string | null
          summary_email: string | null
          summary_first_name: string | null
          summary_phone: string | null
          uid: string | null
          updated_at: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      reconcile_kc_bookings: {
        Args: { p_source: string; p_sync_started_at: string }
        Returns: number
      }
      upsert_kc_booking: {
        Args: {
          p_attendee_email: string
          p_attendee_name: string
          p_end_at: string
          p_mark_seen_at: string
          p_price: number
          p_source: string
          p_space: string
          p_start_at: string
          p_status: string
          p_summary: string
          p_uid: string
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
