export function Notes({ notes, setNotes }) {
  return (
    <section class="notes">
      <h2>Notes</h2>
      <textarea
        value={notes}
        onInput={(e) => setNotes(e.target.value)}
        placeholder="Jot down your thoughts, reminders, or tips here..."
      ></textarea>
    </section>
  );
}
