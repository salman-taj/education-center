using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Entities
{
    public class Candidate : EntityBase
    {
        public int CandidateId { get; set; }

        // Basic informtion
        public string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public int GenderId { get; set; }
        public virtual Gender Gender { get; set; }

        // Contact informtion
        public string Email { get; set; }
        public string Cnic { get; set; }
        public string Mobile { get; set; }

        
    }
}