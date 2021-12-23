using System.Collections.Generic;

namespace Entities
{
    public class Gender
    {
        public int GenderId { get; set; }
        public string Description { get; set; }

        public virtual ICollection<Candidate> Candidates { get; set; }

        public Gender()
        {
            Candidates = new HashSet<Candidate>();
        }
    }
}