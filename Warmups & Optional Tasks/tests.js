
describe('timesFour', function() {
    it('should be a defined function', function() {
      expect(typeof timesFour).toBe('function');
    });
    it('should return 0 when passed 0', function() {
      expect(timesFour(0)).toBe(0);
    });
    it('should return 20 when passed "5"', function(){
        expect(timesFour("5")).toBe(20);
    })
    it('should return -20 when passed -5', function(){
        expect(timesFour(-5)).toBe(-20);
    })
    it('should return false when passed "Texas"', function(){
        expect(timesFour("Texas")).toBe(false);
    })
    it('should return false when passed an array', function(){
        expect(timesFour([2,1,0])).toBe(false);
    })
    it('should return false when passed true', function(){
        expect(timesFour(true)).toBe(false);
    })
    it('should return false when passed null', function(){
        expect(timesFour(null)).toBe(false);
    })
    it('should return false when passed NaN', function(){
        expect(timesFour(NaN)).toBe(false);
    })
    it("should never return 'undefined' when called", function() {
      expect(timesFour()).not.toBe(undefined);
    });
});